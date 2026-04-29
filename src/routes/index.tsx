import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Beer, UtensilsCrossed, Heart, MapPin, Clock, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";
import tapas from "@/assets/tapas.jpg";
import beer from "@/assets/beer.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Placita · Cervezas y Tapas en San Bernardo, Sevilla" },
      { name: "description", content: "Bar de cervezas y tapas en pleno San Bernardo. 4,3★ en Google. Reserva tu mesa para disfrutar de cerveza fría, montaditos y el mejor ambiente sevillano." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Terraza de La Placita en Sevilla" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
        <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-28 md:pt-36 md:pb-40 text-primary-foreground">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent">{t("hero.kicker")}</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold max-w-3xl leading-[1.05]">{t("hero.title")}</h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">{t("hero.sub")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-warm">
              <Link to="/reserve">{t("cta.reserve")} <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/menu">{t("cta.menu")}</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-4 ${i < 4 ? "fill-accent text-accent" : "text-accent"}`} />
                ))}
              </div>
              <span><strong className="text-white">4,3</strong> · 163 {t("rating.sub").toLowerCase().includes("review") ? "reviews" : "reseñas"}</span>
            </div>
            <span className="hidden sm:inline w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2"><MapPin className="size-4 text-accent" /> San Bernardo, Sevilla</div>
            <span className="hidden sm:inline w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2"><Clock className="size-4 text-accent" /> 12:00 – 00:00</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl">{t("feat.title")}</h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded bg-gradient-warm" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Beer, k: "beer" },
            { icon: UtensilsCrossed, k: "tapas" },
            { icon: Heart, k: "vibe" },
          ].map(({ icon: Icon, k }) => (
            <div key={k} className="group rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-warm transition-shadow">
              <div className="size-12 rounded-xl bg-gradient-warm grid place-items-center text-primary-foreground">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{t(`feat.${k}.t` as any)}</h3>
              <p className="mt-2 text-muted-foreground">{t(`feat.${k}.d` as any)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative">
            <img src={tapas} alt="Tapas variadas" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-warm w-full aspect-square object-cover" />
            <img src={beer} alt="Cerveza" loading="lazy" width={400} height={400} className="hidden md:block absolute -bottom-8 -right-8 w-44 aspect-square object-cover rounded-2xl border-4 border-background shadow-warm" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("nav.menu")}</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">{t("menu.title")}</h2>
            <p className="mt-4 text-muted-foreground text-lg">{t("menu.sub")}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex justify-between border-b border-dashed border-border pb-3"><span>Gambas blancas de Huelva cocidas</span><span className="text-primary font-medium">14,00 €</span></li>
              <li className="flex justify-between border-b border-dashed border-border pb-3"><span>Taquitos de paleta ibérica 100%</span><span className="text-primary font-medium">12,00 €</span></li>
              <li className="flex justify-between border-b border-dashed border-border pb-3"><span>Mojama extra de Barbate</span><span className="text-primary font-medium">4,50 / 14,00 €</span></li>
              <li className="flex justify-between"><span>Montadito de pringá</span><span className="text-primary font-medium">3,50 €</span></li>
            </ul>
            <Button asChild className="mt-7"><Link to="/menu">{t("cta.menu")} <ArrowRight className="ml-1 size-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <div className="flex justify-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-6 fill-accent text-accent" />)}
        </div>
        <blockquote className="font-display text-2xl md:text-3xl leading-snug">
          “Lieu convivial et calme pour la détente, soit pour prendre un verre soit pour manger. Le service et la cuisine sont excellents.”
        </blockquote>
        <div className="mt-5 text-sm text-muted-foreground">— Samir Serghini · Local Guide · Google Reviews</div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <img src={interior} alt="Interior de La Placita" loading="lazy" width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center text-primary-foreground">
          <h2 className="font-display text-4xl md:text-5xl">¿Nos vemos esta noche?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Reserva tu mesa y te guardamos el sitio favorito.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/reserve">{t("cta.reserve")}</Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10"><a href="tel:+34625304245">{t("cta.call")} · +34 625 30 42 45</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
