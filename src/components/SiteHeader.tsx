import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/menu", label: t("nav.menu") },
    { to: "/about", label: t("nav.about") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/reserve", label: t("nav.reserve") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl tracking-tight">
            La <span className="text-gradient-warm font-bold">Placita</span>
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">San Bernardo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center text-xs rounded-full border border-border overflow-hidden">
            <button
              onClick={() => setLang("es")}
              className={`px-2.5 py-1 ${lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >ES</button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >EN</button>
          </div>
          <Button asChild size="sm" variant="default">
            <Link to="/reserve">{t("cta.reserve")}</Link>
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-1.5 text-foreground/80"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center text-xs rounded-full border border-border overflow-hidden">
                <button
                  onClick={() => setLang("es")}
                  className={`px-3 py-1.5 ${lang === "es" ? "bg-primary text-primary-foreground" : ""}`}
                >ES</button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 ${lang === "en" ? "bg-primary text-primary-foreground" : ""}`}
                >EN</button>
              </div>
              <a href="tel:+34625304245" className="inline-flex items-center gap-2 text-sm text-primary">
                <Phone className="size-4" /> +34 625 30 42 45
              </a>
            </div>
            <Button asChild className="mt-2"><Link to="/reserve" onClick={() => setOpen(false)}>{t("cta.reserve")}</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
}
