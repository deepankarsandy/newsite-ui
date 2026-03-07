import {
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden py-10 md:py-14">
      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-300/20"
        aria-hidden={true}
      />
      <div
        className="pointer-events-none absolute top-36 -right-20 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-300/20"
        aria-hidden={true}
      />

      <section
        aria-labelledby="intro-heading"
        className="bg-card/70 relative grid gap-6 rounded-3xl border p-6 backdrop-blur-sm md:grid-cols-3 md:p-10"
      >
        <div className="space-y-5 md:col-span-2">
          <Badge
            variant="secondary"
            className="text-xs tracking-wider uppercase"
          >
            {t("aboutme.hero.role")}
          </Badge>
          <h1
            id="intro-heading"
            className="text-3xl leading-tight font-bold md:text-5xl"
          >
            {t("aboutme.hero.name")}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            {t("aboutme.hero.summary")}
          </p>
        </div>

        <Card className="md:w-full md:max-w-sm md:self-end md:justify-self-end">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              {t("aboutme.contact.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <MapPin
                className="text-muted-foreground mt-0.5 h-4 w-4"
                aria-hidden={true}
              />
              <span>
                <span className="text-muted-foreground">
                  {t("aboutme.contact.locationLabel")}:{" "}
                </span>
                <a
                  className="underline decoration-dotted underline-offset-4"
                  href="https://maps.google.com/?q=20.83386320943469,86.33266497694243"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("aboutme.contact.location")} (
                  {t("aboutme.contact.locationCta")})
                </a>
              </span>
            </p>
            <p className="flex items-start gap-2">
              <Mail
                className="text-muted-foreground mt-0.5 h-4 w-4"
                aria-hidden={true}
              />
              <span>
                <span className="text-muted-foreground">
                  {t("aboutme.contact.emailLabel")}:{" "}
                </span>
                <a
                  className="underline decoration-dotted underline-offset-4"
                  href="mailto:dee.sandy@hotmail.com"
                >
                  {t("aboutme.contact.emailCta")}
                </a>
              </span>
            </p>
            <p className="flex items-start gap-2">
              <Linkedin
                className="text-muted-foreground mt-0.5 h-4 w-4"
                aria-hidden={true}
              />
              <span>
                <span className="text-muted-foreground">
                  {t("aboutme.contact.linkedinLabel")}:{" "}
                </span>
                <a
                  className="underline decoration-dotted underline-offset-4"
                  href={t("aboutme.contact.linkedinUrl")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  {t("aboutme.contact.linkedin")}
                </a>
              </span>
            </p>
          </CardContent>
        </Card>
      </section>

      <section
        aria-labelledby="professional-heading"
        className="bg-card/60 mt-8 rounded-2xl border p-6"
      >
        <h2 id="professional-heading" className="text-2xl font-semibold">
          {t("aboutme.professional.title")}
        </h2>
        <p className="text-muted-foreground mt-3 text-sm md:text-base">
          {t("aboutme.professional.intro")}
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t("aboutme.professional.architectureTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm">
              <p>{t("aboutme.professional.greenfield")}</p>
              <p>{t("aboutme.professional.reliability")}</p>
              <p>{t("aboutme.professional.mentorship")}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t("aboutme.professional.masteryTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm">
              <p>{t("aboutme.professional.frontend")}</p>
              <p>{t("aboutme.professional.quality")}</p>
              <p>{t("aboutme.professional.workflows")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        aria-labelledby="skills-heading"
        className="bg-card/60 mt-8 rounded-2xl border p-6"
      >
        <h2 id="skills-heading" className="text-2xl font-semibold">
          {t("aboutme.skills.title")}
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge className="bg-cyan-600 text-white hover:bg-cyan-500">
            {t("aboutme.skills.badges.typescript")}
          </Badge>
          <Badge className="bg-cyan-600 text-white hover:bg-cyan-500">
            {t("aboutme.skills.badges.javascript")}
          </Badge>
          <Badge className="bg-cyan-600 text-white hover:bg-cyan-500">
            {t("aboutme.skills.badges.sql")}
          </Badge>
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-500">
            {t("aboutme.skills.badges.next")}
          </Badge>
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-500">
            {t("aboutme.skills.badges.react")}
          </Badge>
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-500">
            {t("aboutme.skills.badges.node")}
          </Badge>
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-500">
            {t("aboutme.skills.badges.express")}
          </Badge>
          <Badge className="bg-amber-600 text-white hover:bg-amber-500">
            {t("aboutme.skills.badges.awsLambda")}
          </Badge>
          <Badge className="bg-amber-600 text-white hover:bg-amber-500">
            {t("aboutme.skills.badges.awsDynamoDb")}
          </Badge>
          <Badge className="bg-amber-600 text-white hover:bg-amber-500">
            {t("aboutme.skills.badges.awsCognito")}
          </Badge>
          <Badge className="bg-amber-600 text-white hover:bg-amber-500">
            {t("aboutme.skills.badges.awsS3")}
          </Badge>
          <Badge className="bg-amber-600 text-white hover:bg-amber-500">
            {t("aboutme.skills.badges.awsCloudFront")}
          </Badge>
          <Badge className="bg-violet-600 text-white hover:bg-violet-500">
            {t("aboutme.skills.badges.postgresql")}
          </Badge>
          <Badge className="bg-violet-600 text-white hover:bg-violet-500">
            {t("aboutme.skills.badges.mongodb")}
          </Badge>
        </div>
      </section>

      <section
        aria-labelledby="tinkerer-heading"
        className="bg-card/60 mt-8 rounded-2xl border p-6"
      >
        <h2 id="tinkerer-heading" className="text-2xl font-semibold">
          {t("aboutme.tinkerer.title")}
        </h2>
        <p className="text-muted-foreground mt-3 text-sm md:text-base">
          {t("aboutme.tinkerer.intro")}
        </p>
        <ul className="text-muted-foreground mt-5 space-y-3 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <ShieldCheck className="mt-1 h-4 w-4" aria-hidden={true} />
            <span>{t("aboutme.tinkerer.homelab")}</span>
          </li>
          <li className="flex items-start gap-2">
            <Wrench className="mt-1 h-4 w-4" aria-hidden={true} />
            <span>{t("aboutme.tinkerer.linux")}</span>
          </li>
          <li className="flex items-start gap-2">
            <Wrench className="mt-1 h-4 w-4" aria-hidden={true} />
            <span>{t("aboutme.tinkerer.analog")}</span>
          </li>
          <li className="flex items-start gap-2">
            <Leaf className="mt-1 h-4 w-4" aria-hidden={true} />
            <span>{t("aboutme.tinkerer.balance")}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
