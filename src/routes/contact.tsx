import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto · La Placita Sevilla" },
      { name: "description", content: "Visítanos en Pl. Bomberos del Toro y Rivero, 4, Sevilla. Teléfono +34 625 30 42 45." },
      { property: "og:title", content: "Contacto · La Placita" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("nav.contact")}</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("contact.title")}</h1>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-4">
          <Card icon={MapPin} title={t("nav.contact")} value={t("contact.address")} />
          <Card icon={Clock} title={t("contact.hours")} value={t("contact.hours.val")} />
          <Card icon={Phone} title={t("contact.phone")} value="+34 625 30 42 45" href="tel:+34625304245" />
          <Card icon={Mail} title="Email" value="hola@laplacita.es" href="mailto:hola@laplacita.es" />
          <Card icon={Instagram} title="Instagram" value="@laplacita" href="https://instagram.com" />
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-square">
          <iframe
            title="Mapa La Placita"
            src="https://www.google.com/maps?q=Pl.+Bomberos+del+Toro+y+Rivero,+4,+41004+Sevilla&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-soft transition">
      <div className="size-10 rounded-lg bg-gradient-warm grid place-items-center text-primary-foreground shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a> : content;
}
