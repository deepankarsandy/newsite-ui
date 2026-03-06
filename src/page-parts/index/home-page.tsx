import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Mail, MapPin, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden py-10 md:py-14">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-300/20"
        aria-hidden={true}
      />
      <div
        className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-300/20"
        aria-hidden={true}
      />

      <section
        aria-labelledby="intro-heading"
        className="relative grid gap-6 rounded-3xl border bg-card/70 p-6 backdrop-blur-sm md:grid-cols-[1.4fr_1fr] md:p-10"
      >
        <div className="space-y-5">
          <Badge variant="secondary" className="text-xs uppercase tracking-wider">
            {t("homepage.hero.eyebrow")}
          </Badge>
          <h1
            id="intro-heading"
            className="text-3xl font-bold leading-tight md:text-5xl"
          >
            {t("homepage.hero.title")}
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            {t("homepage.hero.summary")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild={true} size="lg">
              <Link to="/components">
                {t("homepage.hero.primaryCta")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden={true} />
              </Link>
            </Button>
            <Button asChild={true} variant="outline" size="lg">
              <a href="mailto:dee.sandy@hotmail.com">
                <Mail className="mr-2 h-4 w-4" aria-hidden={true} />
                {t("homepage.hero.secondaryCta")}
              </a>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t("homepage.contact.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden={true} />
              <span>{t("homepage.contact.location")}</span>
            </p>
            <p>
              <span className="text-muted-foreground">{t("homepage.contact.emailLabel")}: </span>
              <a className="underline decoration-dotted underline-offset-4" href="mailto:dee.sandy@hotmail.com">
                dee.sandy@hotmail.com
              </a>
            </p>
            <p>
              <span className="text-muted-foreground">{t("homepage.contact.linkedinLabel")}: </span>
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://www.linkedin.com/in/deepankarsandhibigraha"
                target="_blank"
                rel="noreferrer"
              >
                in/deepankarsandhibigraha
              </a>
            </p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="professional-heading" className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle id="professional-heading" className="text-xl">
              {t("homepage.professional.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>{t("homepage.professional.summary")}</p>
            <ul className="space-y-2">
              <li>{t("homepage.professional.magicEdtech")}</li>
              <li>{t("homepage.professional.tikkl")}</li>
              <li>{t("homepage.professional.modernization")}</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{t("homepage.tinkerer.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>{t("homepage.tinkerer.summary")}</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Wrench className="mt-0.5 h-4 w-4" aria-hidden={true} />
                <span>{t("homepage.tinkerer.analogEngineer")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="mt-0.5 h-4 w-4" aria-hidden={true} />
                <span>{t("homepage.tinkerer.nature")}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="toolkit-heading" className="mt-8 rounded-2xl border bg-card/60 p-6">
        <h2 id="toolkit-heading" className="text-xl font-semibold">
          {t("homepage.toolkit.title")}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>{t("homepage.toolkit.items.js")}</Badge>
          <Badge>{t("homepage.toolkit.items.ts")}</Badge>
          <Badge>{t("homepage.toolkit.items.react")}</Badge>
          <Badge>{t("homepage.toolkit.items.next")}</Badge>
          <Badge>{t("homepage.toolkit.items.node")}</Badge>
          <Badge>{t("homepage.toolkit.items.aws")}</Badge>
          <Badge>{t("homepage.toolkit.items.postgres")}</Badge>
          <Badge>{t("homepage.toolkit.items.mongodb")}</Badge>
          <Badge>{t("homepage.toolkit.items.playwright")}</Badge>
          <Badge>{t("homepage.toolkit.items.cypress")}</Badge>
        </div>
      </section>
    </div>
  );
};
