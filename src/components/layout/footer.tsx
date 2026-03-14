import { InstagramLogo } from "@/icons/instagram-icon";
import { TwitterXLogo } from "@/icons/twitter-x-icon";
import { YouTubeLogo } from "@/icons/youtube-icon";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t">
      <div className="flex justify-between px-6">
        <div className="text-muted-foreground py-4 text-sm">
          {t("layout.footer", { year: new Date().getFullYear() })}
        </div>
        <div className="flex items-center gap-x-4">
          <a href="https://x.com/DeepankarSandy" target="_blank" rel="noreferrer">
            <TwitterXLogo className="text-color-white h-4 w-4" />
          </a>
          <a href="https://youtube.com/DeepankarSandy" target="_blank" rel="noreferrer">
            <YouTubeLogo className="h-5 w-5" />
          </a>
          <a href="https://instagram.com/deepankar_sandy" target="_blank" rel="noreferrer">
            <InstagramLogo className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
