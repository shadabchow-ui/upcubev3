import type { Metadata } from "next";
import { platformPages, upcubeProducts } from "@/lib/upcube/registry";
import { ActivityItem } from "./components/activity-item";
import { DeploymentsTable } from "./components/deployments-table";
import { ConsoleEmptyState } from "./components/empty-state";
import { Header } from "./components/header";
import { QuickActions } from "./components/quick-actions";
import {
  sampleActivity,
  sampleDeployments,
  sampleStats,
} from "./components/sample-data";
import { StatCard } from "./components/stat-card";

export const metadata: Metadata = {
  title: "Upcube Console",
  description: "Operating console for the Upcube platform.",
};

const OverviewPage = () => (
  <>
    <Header page="Overview" pages={["Upcube"]} />
    <div className="flex flex-1 flex-col gap-8 p-6 pt-0">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-semibold text-2xl tracking-tight">
            Upcube Console
          </h1>
          <p className="text-muted-foreground text-sm">
            Operating console for the Upcube platform.
          </p>
        </div>

        <QuickActions />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sampleStats.map((stat) => (
            <StatCard item={stat} key={stat.label} />
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
            Recent Activity
          </h2>
          <div className="divide-y divide-border rounded-lg border bg-card">
            {sampleActivity.length > 0 ? (
              sampleActivity.map((activity, idx) => (
                <ActivityItem
                  activity={activity}
                  isLast={idx === sampleActivity.length - 1}
                  key={activity.id}
                />
              ))
            ) : (
              <ConsoleEmptyState
                description="Activity from your projects and team will appear here."
                title="No recent activity"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
            Recent Deployments
          </h2>
          <div className="overflow-hidden rounded-lg border bg-card">
            {sampleDeployments.length > 0 ? (
              <DeploymentsTable deployments={sampleDeployments} />
            ) : (
              <ConsoleEmptyState
                actionHref="/cloud/deployments"
                actionLabel="New Deployment"
                description="Deploy your first project to see it here."
                title="No deployments yet"
              />
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
          Products
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcubeProducts.map((product) => (
            <a
              className="group rounded-xl border bg-card p-5 transition-all duration-150 ease-out hover:bg-accent/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:bg-accent/70"
              href={product.href}
              key={product.id}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <h3 className="font-medium leading-none">{product.name}</h3>
                  <p className="text-muted-foreground text-sm leading-snug">
                    {product.description}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center rounded-md border bg-muted px-2 py-0.5 font-medium text-[11px] text-muted-foreground uppercase tracking-wide">
                  {product.status}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
          Platform
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {platformPages.slice(1).map((page) => (
            <a
              className="group rounded-xl border bg-card p-5 transition-all duration-150 ease-out hover:bg-accent/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:bg-accent/70"
              href={page.href}
              key={page.id}
            >
              <div className="space-y-1.5">
                <h3 className="font-medium leading-none">{page.label}</h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  {page.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default OverviewPage;
