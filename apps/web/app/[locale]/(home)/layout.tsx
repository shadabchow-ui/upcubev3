import { getDictionary } from "@repo/internationalization";
import type { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

interface HomeLayoutProperties {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
}

const HomeLayout = async ({ children, params }: HomeLayoutProperties) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <Header dictionary={dictionary} />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
