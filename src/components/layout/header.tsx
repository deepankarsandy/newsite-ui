import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">{title}</h1>
        </Link>
        <div className="flex gap-2 items-center">
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
