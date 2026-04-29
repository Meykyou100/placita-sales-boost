import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">
            La <span className="text-gradient-warm font-bold">Placita</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">{t("footer.tag")}</p>
        </div>
        <div className="text-sm space-y-2">
          <div className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-primary" /> Pl. Bomberos del Toro y Rivero, 4 · 41004 Sevilla</div>
          <a href="tel:+34625304245" className="flex items-center gap-2 hover:text-primary"><Phone className="size-4 text-primary" /> +34 625 30 42 45</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><Instagram className="size-4 text-primary" /> @laplacita</a>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-2">{t("nav.menu")}</div>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><Link to="/menu" className="hover:text-primary">{t("nav.menu")}</Link></li>
            <li><Link to="/about" className="hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">{t("nav.gallery")}</Link></li>
            <li><Link to="/reserve" className="hover:text-primary">{t("nav.reserve")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} La Placita · {t("footer.rights")}
      </div>
    </footer>
  );
}
