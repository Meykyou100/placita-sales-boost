import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import hero from "@/assets/hero.jpg";
import tapas from "@/assets/tapas.jpg";
import beer from "@/assets/beer.jpg";
import interior from "@/assets/interior.jpg";
import montadito from "@/assets/montadito.jpg";
import croquetas from "@/assets/croquetas.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galería · La Placita Sevilla" },
      { name: "description", content: "Fotos de La Placita: tapas, cervezas y ambiente en San Bernardo, Sevilla." },
      { property: "og:title", content: "Galería · La Placita" },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: hero, alt: "Terraza al atardecer", span: "md:col-span-2 md:row-span-2" },
  { src: tapas, alt: "Tapas variadas" },
  { src: beer, alt: "Cerveza tirada" },
  { src: interior, alt: "Interior", span: "md:col-span-2" },
  { src: montadito, alt: "Montadito" },
  { src: croquetas, alt: "Croquetas" },
];

function GalleryPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("nav.gallery")}</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">{t("gallery.title")}</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
        {images.map((img, i) => (
          <div key={i} className={`relative overflow-hidden rounded-2xl group ${img.span ?? ""}`}>
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
