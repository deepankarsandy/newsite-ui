import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImmichLogo } from "@/icons/immich-icon";

export const Route = createLazyFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  const { t } = useTranslation();
  const slides = useMemo(
    () => ["/images/immich-banner-1.webp", "/images/immich-banner-2.webp"],
    [],
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState<number[]>([0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length;
        setLoadedSlides((current) => (current.includes(next) ? current : [...current, next]));
        return next;
      });
    }, 6000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="relative right-1/2 left-1/2 -mx-[50vw] h-[calc(100dvh-8rem)] w-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {slides.map((src, index) =>
          loadedSlides.includes(index) ? (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              loading={index === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1800 ease-out ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null,
        )}
      </div>

      <div className="absolute inset-0 bg-black/35" />

      <section className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <header className="relative px-6 py-6 sm:px-10 sm:py-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-[30px] bg-black/25 backdrop-blur-md"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.9) 58%, rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.35) 84%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.9) 58%, rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.35) 84%, transparent 100%)",
            }}
          />
          <p className="mb-3 text-xs tracking-[0.35em] text-zinc-300 uppercase">
            {t("gallery.eyebrow")}
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            {t("gallery.title")}
          </h1>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-200/90">
            <span>{t("gallery.poweredBy")}</span>
            <ImmichLogo size={18} className="shrink-0" aria-hidden="true" />
            <a
              href="https://immich.app/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline decoration-zinc-300 underline-offset-4 transition hover:text-white"
            >
              {t("gallery.immich")}
            </a>
          </p>
        </header>
      </section>
    </main>
  );
}
