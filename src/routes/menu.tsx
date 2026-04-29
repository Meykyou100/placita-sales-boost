import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import tapas from "@/assets/tapas.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Carta · La Placita Sevilla" },
      { name: "description", content: "Carta de tapas, montaditos, ibéricos y conservas en La Placita, San Bernardo. Producto fresco y andaluz." },
      { property: "og:title", content: "Carta · La Placita Sevilla" },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; price: string };

const sections = (t: (k: any) => string): { title: string; items: Item[] }[] => [
  {
    title: t("menu.cat.classics"),
    items: [
      { name: "Chicharrones fritos al momento", price: "4,00 € / 10,00 €" },
      { name: "Caracoles (en temporada)", price: "3,50 € / 7,50 €" },
      { name: "Patatas fritas de Umbrete", price: "2,50 €" },
      { name: "Almendras fritas", price: "3,50 €" },
      { name: "Gordales cachonditas", price: "3,50 €" },
      { name: "Patatas bravas", price: "6,00 €" },
    ],
  },
  {
    title: t("menu.cat.sea"),
    items: [
      { name: "Gilda de anchoas de Santoña", price: "3,50 €" },
      { name: "Gambas blancas de Huelva cocidas", price: "14,00 €" },
      { name: "Ensaladilla de melva", price: "4,00 € / 10,00 €" },
      { name: "Papas aliñadas con melva", price: "4,00 € / 10,00 €" },
      { name: "Atún encebollado", price: "4,00 € / 10,00 €" },
      { name: "Asaduras de ternera aliñadas", price: "4,00 € / 10,00 €" },
      { name: "Zanahorias aliñadas", price: "4,00 € / 10,00 €" },
    ],
  },
  {
    title: t("menu.cat.iberico"),
    items: [
      { name: "Taquitos de paleta ibérica 100%", price: "12,00 €" },
      { name: "Taquitos de salchichón ibérico", price: "4,00 € / 12,00 €" },
      { name: "Queso viejo de oveja", price: "4,00 € / 12,00 €" },
      { name: "Tacos de mechá", price: "4,00 € / 10,00 €" },
      { name: "Mojama extra de Barbate", price: "4,50 € / 14,00 €" },
    ],
  },
  {
    title: t("menu.cat.house"),
    items: [
      { name: "Cazuelita de gambas al ajillo", price: "12,00 €" },
      { name: "Pollo frito", price: "4,00 € / 12,00 €" },
      { name: "Boquerones en adobo", price: "4,00 € / 12,00 €" },
      { name: "Guiso del día", price: "4,00 € / 12,00 €" },
    ],
  },
  {
    title: t("menu.cat.mont"),
    items: [
      { name: "Pringá", price: "3,50 €" },
      { name: "Lomo en salsa", price: "3,50 €" },
      { name: "Filetito a la plancha con salsa verde", price: "3,50 €" },
      { name: "Chorizo picante con queso viejo", price: "3,50 €" },
      { name: "Melva canutera con morrón", price: "4,00 €" },
      { name: "Gambas alioli", price: "4,00 €" },
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
          <p className="mt-2 text-sm text-muted-foreground italic">{t("menu.note")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 grid gap-8 md:grid-cols-2">
        {data.map((sec) => (
          <div key={sec.title} className="rounded-2xl bg-card border border-border p-7 shadow-soft">
            <h2 className="font-display text-3xl text-primary">{sec.title}</h2>
            <div className="mt-2 h-0.5 w-12 bg-gradient-warm rounded" />
            <ul className="mt-6 space-y-4">
              {sec.items.map((it) => (
                <li key={it.name} className="flex justify-between gap-4 border-b border-dashed border-border pb-3 last:border-0">
                  <div className="font-medium">{it.name}</div>
                  <div className="font-display text-base text-primary whitespace-nowrap">{it.price}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
