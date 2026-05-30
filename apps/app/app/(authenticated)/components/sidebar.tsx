"use client";

import { OrganizationSwitcher, UserButton } from "@repo/auth/client";
import { ModeToggle } from "@repo/design-system/components/mode-toggle";
import { Button } from "@repo/design-system/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/design-system/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@repo/design-system/components/ui/sidebar";
import { cn } from "@repo/design-system/lib/utils";
import { NotificationsTrigger } from "@repo/notifications/components/trigger";
import {
  AnchorIcon,
  ArchiveIcon,
  BotIcon,
  BriefcaseIcon,
  ChevronRightIcon,
  CloudIcon,
  CommandIcon,
  DatabaseIcon,
  FolderKanbanIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  ShoppingCartIcon,
  StoreIcon,
  UserCheckIcon,
  WorkflowIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { upcubeProducts } from "@/lib/upcube/registry";

interface GlobalSidebarProperties {
  readonly children: ReactNode;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot: BotIcon,
  Cloud: CloudIcon,
  UserCheck: UserCheckIcon,
  Workflow: WorkflowIcon,
  Database: DatabaseIcon,
  GraduationCap: GraduationCapIcon,
  ShoppingCart: ShoppingCartIcon,
  Store: StoreIcon,
  Briefcase: BriefcaseIcon,
  LayoutDashboard: LayoutDashboardIcon,
  FolderKanban: FolderKanbanIcon,
  Archive: ArchiveIcon,
  Search: SearchIcon,
  Settings: SettingsIcon,
};

export const GlobalSidebar = ({ children }: GlobalSidebarProperties) => {
  const pathname = usePathname();
  const { open } = useSidebar();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isProductOpen = (href: string) => pathname.startsWith(href);

  return (
    <>
      <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div
                className={cn(
                  "h-[36px] overflow-hidden transition-all [&>div]:w-full",
                  open ? "" : "-mx-1"
                )}
              >
                <OrganizationSwitcher
                  afterSelectOrganizationUrl="/"
                  hidePersonal
                />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <div className="px-3 py-1.5">
          <Link
            className="flex h-8 items-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent/50 px-3 text-sidebar-foreground/50 text-xs transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground/80"
            href="/search"
          >
            <SearchIcon size={14} />
            <span className="flex-1">Search</span>
            <kbd className="flex items-center gap-0.5 font-mono text-[10px] text-sidebar-foreground/30">
              <CommandIcon size={10} />
              <span>K</span>
            </kbd>
          </Link>
        </div>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/") && !pathname.startsWith("/search")}
                  tooltip="Overview"
                >
                  <Link href="/">
                    <LayoutDashboardIcon />
                    <span>Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Products</SidebarGroupLabel>
            <SidebarMenu>
              {upcubeProducts.map((product) => {
                const Icon = iconMap[product.icon];
                const active = isActive(product.href);
                return (
                  <Collapsible
                    asChild
                    defaultOpen={isProductOpen(product.href)}
                    key={product.id}
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        tooltip={product.name}
                      >
                        <Link href={product.href}>
                          {Icon && <Icon />}
                          <span>{product.name}</span>
                        </Link>
                      </SidebarMenuButton>
                      {product.modules.length > 0 && (
                        <>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuAction className="data-[state=open]:rotate-90">
                              <ChevronRightIcon />
                              <span className="sr-only">
                                Toggle {product.name} modules
                              </span>
                            </SidebarMenuAction>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {product.modules.map((mod) => (
                                <SidebarMenuSubItem key={mod.id}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={pathname === mod.href}
                                  >
                                    <Link href={mod.href}>
                                      <span>{mod.label}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </>
                      )}
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/projects")}
                  tooltip="Projects"
                >
                  <Link href="/projects">
                    <FolderKanbanIcon />
                    <span>Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/artifacts")}
                  tooltip="Artifacts"
                >
                  <Link href="/artifacts">
                    <ArchiveIcon />
                    <span>Artifacts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/settings")}
                  tooltip="Settings"
                >
                  <Link href="/settings">
                    <SettingsIcon />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive("/webhooks")}
                    tooltip="Webhooks"
                  >
                    <Link href="/webhooks">
                      <AnchorIcon />
                      <span>Webhooks</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="opacity-40"
                    disabled
                    tooltip="Support"
                  >
                    <LifeBuoyIcon />
                    <span>Support</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="opacity-40"
                    disabled
                    tooltip="Feedback"
                  >
                    <SendIcon />
                    <span>Feedback</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
              <UserButton
                appearance={{
                  elements: {
                    rootBox: "flex overflow-hidden w-full",
                    userButtonBox: "flex-row-reverse",
                    userButtonOuterIdentifier: "truncate pl-0",
                  },
                }}
                showName
              />
              <div className="flex shrink-0 items-center gap-px">
                <ModeToggle />
                <Button
                  asChild
                  className="shrink-0"
                  size="icon"
                  variant="ghost"
                >
                  <div>
                    <NotificationsTrigger />
                  </div>
                </Button>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </>
  );
};
