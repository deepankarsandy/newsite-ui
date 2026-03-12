import { Link, useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/auth-provider";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { authStatus, isLoggingOut, logout } = useAuth();

  const onLogout = async () => {
    await logout();
    await navigate({ to: "/login" });
  };

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">{title}</h1>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/music" className="[&.active]:font-bold">
            {t("layout.nav.music")}
          </Link>
          <Link to="/media" className="[&.active]:font-bold">
            {t("layout.nav.media")}
          </Link>
          <Link to="/gallery" className="[&.active]:font-bold">
            {t("layout.nav.gallery")}
          </Link>
          {authStatus === "authenticated" ? (
            <Button variant="ghost" onClick={onLogout} disabled={isLoggingOut}>
              {isLoggingOut ? "Logging out..." : "Log out"}
            </Button>
          ) : (
            <Link to="/login" className="[&.active]:font-bold">
              Login
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
