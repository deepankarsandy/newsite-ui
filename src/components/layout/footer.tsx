import { useTranslation } from "react-i18next";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="border-t">
			<div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
				{t("layout.footer", { year: new Date().getFullYear() })}
			</div>
		</footer>
	);
};
