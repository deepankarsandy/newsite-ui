import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">{title}</h1>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/" className="[&.active]:font-bold">
            {t("layout.nav.home")}
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            {t("layout.nav.about")}
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
