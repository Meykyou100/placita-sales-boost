// Static SPA entry for Netlify (and any other static host).
// This bypasses TanStack Start's SSR shell and mounts the router
// purely on the client. The Lovable/SSR build still uses src/router.tsx
// + src/routes/__root.tsx unchanged.

import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getRouter } from "./router";

const router = getRouter();

function App() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <RouterProvider router={router} />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}

const el = document.getElementById("root")!;
createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
