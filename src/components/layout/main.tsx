import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t("layout.title")} />
      <main className="container mx-auto flex-1 pt-16">{children}</main>
      <Footer />
    </>
  );
};
