"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Form = {
  name: string;
  email: string;
  instagram: string;
  niche: string;
  revenue: string;
  problem: string;
};

const initial: Form = {
  name: "",
  email: "",
  instagram: "",
  niche: "",
  revenue: "",
  problem: "",
};

const revenueOptions = [
  "Do 5 tys. zł/mies.",
  "5–15 tys. zł/mies.",
  "15–30 tys. zł/mies.",
  "30–60 tys. zł/mies.",
  "Powyżej 60 tys. zł/mies.",
];

export default function KontaktForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<Form>(initial);

  const canSubmit =
    form.name.trim() &&
    form.email.trim() &&
    form.niche.trim() &&
    form.revenue &&
    form.problem.trim();

  function update<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStep(2);
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-center gap-3 mb-10 text-sm">
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
              step >= 1
                ? "bg-ink text-paper"
                : "bg-ink/10 text-ink/40"
            }`}
          >
            1
          </div>
          <span className={step >= 1 ? "text-ink" : "text-ink/50"}>
            Krótki formularz
          </span>
        </div>
        <div className="w-12 h-px bg-ink/15" />
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
              step >= 2
                ? "bg-ink text-paper"
                : "bg-ink/10 text-ink/40"
            }`}
          >
            2
          </div>
          <span className={step >= 2 ? "text-ink" : "text-ink/50"}>
            Wybór terminu
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-3xl bg-paper-100 border border-ink/[0.08]"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field
                label="Imię i nazwisko"
                value={form.name}
                onChange={(v) => update("name", v)}
                placeholder="Jak masz na imię?"
                required
              />
              <Field
                label="E-mail"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                placeholder="twoj@email.pl"
                required
              />
              <Field
                label="Instagram (opcjonalnie)"
                value={form.instagram}
                onChange={(v) => update("instagram", v)}
                placeholder="@nazwa"
              />
              <Field
                label="Twoja nisza"
                value={form.niche}
                onChange={(v) => update("niche", v)}
                placeholder="np. trening siłowy dla kobiet"
                required
              />
            </div>

            <div className="mt-6">
              <label className="block text-xs uppercase tracking-[0.18em] text-ink/55 mb-3">
                Obecny przychód miesięczny{" "}
                <span className="text-rose-600">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {revenueOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => update("revenue", opt)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      form.revenue === opt
                        ? "bg-ink text-paper border-ink"
                        : "bg-transparent text-ink/70 border-ink/15 hover:border-ink/40 hover:text-ink"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-xs uppercase tracking-[0.18em] text-ink/55 mb-3">
                Co jest największą blokadą w Twoim biznesie?{" "}
                <span className="text-rose-600">*</span>
              </label>
              <textarea
                value={form.problem}
                onChange={(e) => update("problem", e.target.value)}
                rows={4}
                placeholder="W kilku zdaniach — co Cię gryzie, co próbowałeś, gdzie według Ciebie leży problem."
                className="w-full px-5 py-4 rounded-2xl bg-paper border border-ink/[0.12] focus:border-ink/40 outline-none text-ink placeholder:text-ink/40 transition-colors resize-none"
              />
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-ink/55 max-w-sm">
                Wypełnienie zajmuje 90 sekund. Po wysłaniu zobaczysz mój kalendarz
                i wybierzesz dogodny termin.
              </p>
              <button
                type="submit"
                disabled={!canSubmit}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-[opacity,scale] ${
                  canSubmit
                    ? "bg-ink text-paper hover:opacity-90 active:scale-[0.97]"
                    : "bg-ink/15 text-ink/40 cursor-not-allowed"
                }`}
              >
                Przejdź do wyboru terminu →
              </button>
            </div>
          </motion.form>
        )}

        {step === 2 && (
          <motion.div
            key="calendly"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="p-8 md:p-12 rounded-3xl bg-paper-100 border border-ink/[0.08] text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-emerald-700"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-display text-[clamp(28px,3.8vw,40px)] text-ink mb-3">
              Dzięki, {form.name.split(" ")[0]}.
            </h3>
            <p className="text-ink/70 max-w-md mx-auto mb-8 text-[15px] leading-[1.6]">
              Otrzymałem Twoje zgłoszenie. Wybierz teraz dogodny termin —
              potwierdzenie z linkiem do rozmowy przyjdzie na e-mail.
            </p>

            <div className="rounded-2xl bg-paper border border-ink/[0.1] p-8 max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.18em] text-ink/45 mb-4">
                Calendly
              </div>
              <p className="text-ink/65 text-sm mb-6">
                Tutaj osadzisz swój kalendarz Calendly — na razie placeholder.
              </p>
              <a
                href="https://calendly.com/your-handle/30min"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Otwórz Calendly →
              </a>
            </div>

            <button
              onClick={() => {
                setStep(1);
                setForm(initial);
              }}
              className="mt-8 text-sm text-ink/60 hover:text-ink transition-colors underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
            >
              Zacznij od nowa
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-ink/55 mb-2">
        {label} {required && <span className="text-rose-600">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-5 py-3.5 rounded-2xl bg-paper border border-ink/[0.12] focus:border-ink/40 outline-none text-ink placeholder:text-ink/40 transition-colors"
      />
    </div>
  );
}
