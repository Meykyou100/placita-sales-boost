import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reservar mesa · La Placita Sevilla" },
      { name: "description", content: "Reserva tu mesa en La Placita, San Bernardo. Te confirmamos por teléfono o email." },
      { property: "og:title", content: "Reservar · La Placita" },
    ],
  }),
  component: ReservePage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(6).max(30),
  date: z.string().min(1),
  time: z.string().min(1),
  people: z.string().min(1),
  notes: z.string().max(500).optional(),
});

function ReservePage() {
  const { t } = useI18n();
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(true);
  };

  if (done) {
    return (
      <section className="mx-auto max-w-md px-5 py-24 text-center">
        <div className="size-16 rounded-full bg-gradient-warm grid place-items-center mx-auto text-primary-foreground">
          <CheckCircle2 className="size-8" />
        </div>
        <h1 className="mt-6 font-display text-3xl">{t("res.ok")}</h1>
        <Button className="mt-6" onClick={() => setDone(false)}>OK</Button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-5 py-16">
      <div className="text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">{t("nav.reserve")}</span>
        <h1 className="mt-3 font-display text-5xl">{t("res.title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("res.sub")}</p>
      </div>

      <form onSubmit={onSubmit} className="mt-10 grid gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label={t("res.name")} error={errors.name}><Input id="name" name="name" required maxLength={80} /></Field>
          <Field id="phone" label={t("res.phone")} error={errors.phone}><Input id="phone" name="phone" required maxLength={30} type="tel" /></Field>
        </div>
        <Field id="email" label={t("res.email")} error={errors.email}><Input id="email" name="email" required maxLength={120} type="email" /></Field>
        <div className="grid gap-5 sm:grid-cols-3">
          <Field id="date" label={t("res.date")} error={errors.date}><Input id="date" name="date" type="date" required /></Field>
          <Field id="time" label={t("res.time")} error={errors.time}><Input id="time" name="time" type="time" required /></Field>
          <Field id="people" label={t("res.people")} error={errors.people}>
            <select id="people" name="people" required defaultValue="2" className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm">
              {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </Field>
        </div>
        <Field id="notes" label={t("res.notes")}><Textarea id="notes" name="notes" maxLength={500} rows={3} /></Field>

        <Button type="submit" size="lg" className="mt-2">{t("res.submit")}</Button>
      </form>
    </section>
  );
}

function Field({ id, label, children, error }: { id: string; label: string; children: React.ReactNode; error?: string }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
