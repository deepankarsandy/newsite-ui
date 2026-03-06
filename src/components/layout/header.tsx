import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header className="border-b">
      <div className="container mx-auto py-4 flex justify-between items-center">
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
