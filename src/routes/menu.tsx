import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import tapas from "@/assets/tapas.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Carta · La Placita Sevilla" },
      { name: "description", content: "Carta de tapas, montaditos, cervezas y vinos en La Placita, San Bernardo." },
      { property: "og:title", content: "Carta · La Placita Sevilla" },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string };

const sections = (t: (k: any) => string): { title: string; items: Item[] }[] => [
  {
    title: t("menu.cat.tapas"),
    items: [
      { name: "Croquetas caseras", desc: "Jamón ibérico · 6 ud.", price: "7,50 €" },
      { name: "Jamón ibérico de bellota", price: "14,00 €" },
      { name: "Patatas bravas", desc: "Salsa brava de la casa", price: "5,50 €" },
      { name: "Tortilla española", desc: "Cremosa, al corte", price: "4,80 €" },
      { name: "Ensaladilla rusa", price: "6,00 €" },
      { name: "Pimientos de Padrón", price: "5,00 €" },
    ],
  },
  {
    title: t("menu.cat.mont"),
    items: [
      { name: "Montadito Casa EME", desc: "Lomo, queso, tomate", price: "3,80 €" },
      { name: "Montadito de pringá", price: "3,50 €" },
      { name: "Montadito de salmón ahumado", price: "4,20 €" },
      { name: "Montadito vegetal", price: "3,20 €" },
    ],
  },
  {
    title: t("menu.cat.beer"),
    items: [
      { name: "Caña Cruzcampo", price: "2,20 €" },
      { name: "Hop House 13", desc: "Lager irlandesa", price: "2,80 €" },
      { name: "Alhambra Reserva 1925", price: "3,20 €" },
      { name: "IPA artesana del mes", price: "3,80 €" },
      { name: "Tercio sin alcohol", price: "2,50 €" },
    ],
  },
  {
    title: t("menu.cat.drinks"),
    items: [
      { name: "Tinto de verano", price: "3,00 €" },
      { name: "Copa de Rioja Crianza", price: "3,80 €" },
      { name: "Gin Tonic Premium", price: "8,00 €" },
      { name: "Mojito clásico", price: "7,50 €" },
    ],
  },
];

function MenuPage() {
  const { t } = useI18n();
  const data = sections(t);
  return (
    <>
      <section className="relative isolate">
        <img src={tapas} alt="" width={1920} height={600} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">La Placita</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("menu.title")}</h1>
          <p className="mt-4 text-muted-foreground">{t("menu.sub")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 grid gap-12 md:grid-cols-2">
        {data.map((sec) => (
          <div key={sec.title} className="rounded-2xl bg-card border border-border p-7 shadow-soft">
            <h2 className="font-display text-3xl text-primary">{sec.title}</h2>
            <div className="mt-2 h-0.5 w-12 bg-gradient-warm rounded" />
            <ul className="mt-6 space-y-4">
              {sec.items.map((it) => (
                <li key={it.name} className="flex justify-between gap-4 border-b border-dashed border-border pb-3 last:border-0">
                  <div>
                    <div className="font-medium">{it.name}</div>
                    {it.desc && <div className="text-sm text-muted-foreground">{it.desc}</div>}
                  </div>
                  <div className="font-display text-lg text-primary whitespace-nowrap">{it.price}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
