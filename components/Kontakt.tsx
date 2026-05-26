"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

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

export default function Kontakt() {
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
    <section id="kontakt" className="relative py-32 px-6 bg-ink-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-widest text-ink-400">
              08 — Rozmowa
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-tightest leading-[1.0] text-white">
              Zobaczmy, czy{" "}
              <span className="italic text-ink-400">to ma sens</span>
            </h2>
            <p className="mt-6 text-ink-300 leading-relaxed max-w-xl mx-auto">
              45 minut, bezpłatnie. Wychodzisz z konkretnymi wnioskami — niezależnie od tego, czy podejmiemy współpracę.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center justify-center gap-3 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                  step >= 1
                    ? "bg-white text-ink-900"
                    : "bg-ink-700 text-ink-400"
                }`}
              >
                1
              </div>
              <span className={step >= 1 ? "text-white" : "text-ink-500"}>
                Krótki formularz
              </span>
            </div>
            <div className="w-12 h-px bg-ink-700" />
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                  step >= 2
                    ? "bg-white text-ink-900"
                    : "bg-ink-700 text-ink-400"
                }`}
              >
                2
              </div>
              <span className={step >= 2 ? "text-white" : "text-ink-500"}>
                Wybór terminu
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="p-8 md:p-12 rounded-3xl bg-ink-800/60 border border-ink-700/50 backdrop-blur-sm"
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

                <div className="mt-5">
                  <label className="block text-xs uppercase tracking-widest text-ink-400 mb-3">
                    Obecny przychód miesięczny <span className="text-rose-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {revenueOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => update("revenue", opt)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all ${
                          form.revenue === opt
                            ? "bg-white text-ink-900 border-white"
                            : "bg-transparent text-ink-300 border-ink-700 hover:border-ink-500"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-xs uppercase tracking-widest text-ink-400 mb-3">
                    Co jest największą blokadą w Twoim biznesie?{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    value={form.problem}
                    onChange={(e) => update("problem", e.target.value)}
                    rows={4}
                    placeholder="W kilku zdaniach — co Cię gryzie, co próbowałeś, gdzie według Ciebie leży problem."
                    className="w-full px-5 py-4 rounded-2xl bg-ink-900/60 border border-ink-700 focus:border-ink-400 outline-none text-white placeholder:text-ink-500 transition-colors resize-none"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-ink-500 max-w-sm">
                    Wypełnienie zajmuje 90 sekund. Po wysłaniu zobaczysz mój
                    kalendarz i wybierzesz dogodny termin.
                  </p>
                  <MagneticButton
                    type="submit"
                    disabled={!canSubmit}
                    className="!bg-white !text-ink-900 hover:!bg-ink-100"
                  >
                    Przejdź do wyboru terminu →
                  </MagneticButton>
                </div>
              </motion.form>
            )}

            {step === 2 && (
              <motion.div
                key="calendly"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-12 rounded-3xl bg-ink-800/60 border border-ink-700/50 backdrop-blur-sm text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-emerald-400"
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
                <h3 className="font-display text-3xl md:text-4xl tracking-tight text-white mb-3">
                  Dzięki, {form.name.split(" ")[0]}.
                </h3>
                <p className="text-ink-300 max-w-md mx-auto mb-8">
                  Otrzymałem Twoje zgłoszenie. Wybierz teraz dogodny termin —
                  potwierdzenie z linkiem do rozmowy przyjdzie na e-mail.
                </p>

                <div className="rounded-2xl bg-ink-900/60 border border-ink-700 p-8 max-w-2xl mx-auto">
                  <div className="text-xs uppercase tracking-widest text-ink-500 mb-4">
                    Calendly placeholder
                  </div>
                  <p className="text-ink-300 text-sm mb-6">
                    W tym miejscu osadź swój kalendarz Calendly — wklej w kodzie
                    URL w pliku{" "}
                    <code className="text-ink-100 bg-ink-800 px-1.5 py-0.5 rounded text-xs">
                      Kontakt.tsx
                    </code>
                    .
                  </p>
                  <a
                    href="https://calendly.com/your-handle/30min"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink-900 text-sm font-medium hover:bg-ink-100 transition-colors"
                  >
                    Otwórz Calendly →
                  </a>
                </div>

                <button
                  onClick={() => {
                    setStep(1);
                    setForm(initial);
                  }}
                  className="mt-8 text-sm text-ink-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  Zacznij od nowa
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
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
      <label className="block text-xs uppercase tracking-widest text-ink-400 mb-2">
        {label} {required && <span className="text-rose-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-5 py-3.5 rounded-2xl bg-ink-900/60 border border-ink-700 focus:border-ink-400 outline-none text-white placeholder:text-ink-500 transition-colors"
      />
    </div>
  );
}
