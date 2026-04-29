import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const dict: Dict = {
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.menu": { es: "Carta", en: "Menu" },
  "nav.about": { es: "Nosotros", en: "About" },
  "nav.gallery": { es: "Galería", en: "Gallery" },
  "nav.reserve": { es: "Reservar", en: "Reserve" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  "cta.reserve": { es: "Reservar mesa", en: "Book a table" },
  "cta.menu": { es: "Ver la carta", en: "See the menu" },
  "cta.call": { es: "Llamar", en: "Call us" },

  "hero.kicker": { es: "Cervezas · Tapas · Sevilla", en: "Beer · Tapas · Sevilla" },
  "hero.title": { es: "El sabor de San Bernardo", en: "The taste of San Bernardo" },
  "hero.sub": {
    es: "Cerveza fría, tapas honestas y el ambiente más acogedor del barrio. Te esperamos en La Placita.",
    en: "Cold beer, honest tapas and the warmest atmosphere in the neighborhood. We're waiting for you at La Placita.",
  },

  "rating.title": { es: "4,3 ★ en Google", en: "4.3 ★ on Google" },
  "rating.sub": { es: "Más de 160 reseñas felices", en: "Over 160 happy reviews" },

  "feat.title": { es: "Lo que nos hace especiales", en: "What makes us special" },
  "feat.beer.t": { es: "Cervezas de autor", en: "Craft beers" },
  "feat.beer.d": { es: "Selección de cervezas artesanas y clásicas, siempre bien tiradas.", en: "A curated selection of craft and classic beers, always perfectly poured." },
  "feat.tapas.t": { es: "Tapas de la casa", en: "House tapas" },
  "feat.tapas.d": { es: "Producto local, recetas tradicionales con un toque moderno.", en: "Local produce, traditional recipes with a modern twist." },
  "feat.vibe.t": { es: "Ambiente acogedor", en: "Cozy atmosphere" },
  "feat.vibe.d": { es: "Un rincón tranquilo en el corazón de San Bernardo.", en: "A quiet spot in the heart of San Bernardo." },

  "menu.title": { es: "Nuestra carta", en: "Our menu" },
  "menu.sub": { es: "Tapas, montaditos y cervezas — pensado para compartir.", en: "Tapas, montaditos and beers — made for sharing." },
  "menu.cat.tapas": { es: "Tapas", en: "Tapas" },
  "menu.cat.mont": { es: "Montaditos", en: "Montaditos" },
  "menu.cat.beer": { es: "Cervezas", en: "Beers" },
  "menu.cat.drinks": { es: "Cócteles & Vinos", en: "Cocktails & Wines" },

  "about.title": { es: "Una placita en San Bernardo", en: "A little square in San Bernardo" },
  "about.p1": {
    es: "La Placita nació con una idea simple: ofrecer buena cerveza, tapas con alma y un sitio donde sentirse como en casa. En pleno corazón de San Bernardo, llevamos años recibiendo a vecinos y viajeros con la misma sonrisa.",
    en: "La Placita was born with a simple idea: serve great beer, soulful tapas and create a place where you feel at home. In the heart of San Bernardo, we have been welcoming neighbors and travelers for years with the same smile.",
  },
  "about.p2": {
    es: "Aquí el servicio es cercano, la cocina honesta y la cerveza siempre fría. Pasa, siéntate y quédate un rato.",
    en: "Here the service is warm, the food is honest and the beer is always cold. Come in, sit down, stay a while.",
  },

  "contact.title": { es: "Visítanos", en: "Visit us" },
  "contact.address": { es: "Pl. Bomberos del Toro y Rivero, 4 · 41004 Sevilla", en: "Pl. Bomberos del Toro y Rivero, 4 · 41004 Sevilla" },
  "contact.hours": { es: "Horario", en: "Hours" },
  "contact.hours.val": { es: "Mar–Dom · 12:00 – 00:00 · Lunes cerrado", en: "Tue–Sun · 12:00 – 00:00 · Closed Monday" },
  "contact.phone": { es: "Teléfono", en: "Phone" },

  "res.title": { es: "Reserva tu mesa", en: "Reserve your table" },
  "res.sub": { es: "Te confirmaremos por teléfono o email.", en: "We'll confirm by phone or email." },
  "res.name": { es: "Nombre", en: "Name" },
  "res.email": { es: "Email", en: "Email" },
  "res.phone": { es: "Teléfono", en: "Phone" },
  "res.date": { es: "Fecha", en: "Date" },
  "res.time": { es: "Hora", en: "Time" },
  "res.people": { es: "Personas", en: "Guests" },
  "res.notes": { es: "Notas (opcional)", en: "Notes (optional)" },
  "res.submit": { es: "Solicitar reserva", en: "Request reservation" },
  "res.ok": { es: "¡Gracias! Te contactaremos pronto.", en: "Thanks! We'll contact you shortly." },

  "gallery.title": { es: "Momentos en La Placita", en: "Moments at La Placita" },

  "footer.tag": { es: "Cerveza, tapas y buen rato desde Sevilla.", en: "Beer, tapas and good times from Sevilla." },
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
};

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string }>({
  lang: "es",
  setLang: () => {},
  t: (k) => dict[k]?.es ?? String(k),
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: keyof typeof dict) => dict[k]?.[lang] ?? String(k);
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
