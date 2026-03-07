import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  const { t } = useTranslation();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hideFooter = pathname === "/media" || pathname === "/gallery";

  return (
    <>
      <Header title={t("layout.title")} />
      <main className="container mx-auto flex-1 pt-16">{children}</main>
      {hideFooter ? null : <Footer />}
    </>
  );
};
