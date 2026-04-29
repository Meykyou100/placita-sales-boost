import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Nosotros · La Placita Sevilla" },
      { name: "description", content: "Conoce La Placita: un bar de cervezas y tapas con alma andaluza en el barrio de San Bernardo, Sevilla." },
      { property: "og:title", content: "Nosotros · La Placita" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 grid gap-12 md:grid-cols-2 items-center">
      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("nav.about")}</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("about.title")}</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("about.p1")}</p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{t("about.p2")}</p>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-xl border border-border p-4">
            <div className="font-display text-3xl text-primary">4,3★</div>
            <div className="text-xs text-muted-foreground mt-1">Google</div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <div className="font-display text-3xl text-primary">163+</div>
            <div className="text-xs text-muted-foreground mt-1">Reseñas</div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <div className="font-display text-3xl text-primary">10+</div>
            <div className="text-xs text-muted-foreground mt-1">Años</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-3 bg-gradient-warm rounded-3xl opacity-20 blur-2xl" />
        <img src={interior} alt="Interior de La Placita" loading="lazy" width={1024} height={1024} className="relative rounded-2xl shadow-warm aspect-square object-cover w-full" />
      </div>
    </section>
  );
}
