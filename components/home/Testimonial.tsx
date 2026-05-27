"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Po dwóch miesiącach przestałem polować na klientów. Mam stabilny grafik i mogę wybierać, z kim pracuję. To zmieniło moje podejście do biznesu.",
    name: "Kamil W.",
    role: "Trener personalny, Warszawa",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Adam wszedł i poukładał wszystko: ofertę, lejek, reklamy. Cztery miesiące i 3× obrót. Bez ściemy, bez kreatywności dla samej kreatywności.",
    name: "Olivia D.",
    role: "Coach online, dieta + trening",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Pracowałem wcześniej z trzema agencjami — żadna nie ogarniała trenera. Adam to rozumie. I co najważniejsze: bierze odpowiedzialność za wyniki.",
    name: "Marcin Z.",
    role: "Strongman coach + studio",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(1);
  const t = testimonials[active];

  return (
    <section className="flex flex-col items-center gap-12 px-6 py-32 md:py-48 bg-paper">
      <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
        04 — Opinie
      </span>
      <blockquote className="flex w-full max-w-[942px] flex-col items-center gap-8">
        <p className="w-full text-balance text-center font-serif font-normal leading-[1.3] tracking-[-0.02em] text-ink text-[clamp(22px,3.6vw,38px)] min-h-[3.9em] flex items-center justify-center">
          „{t.quote}"
        </p>
        <cite className="block whitespace-nowrap text-center text-sm not-italic text-ink/70">
          <strong className="font-medium text-ink">{t.name}</strong> —{" "}
          {t.role}
        </cite>
      </blockquote>

      <div role="tablist" aria-label="Opinie" className="flex items-center gap-3">
        {testimonials.map((tt, i) => {
          const isActive = i === active;
          return (
            <button
              key={tt.name}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`relative h-16 w-16 overflow-hidden rounded-2xl p-1 transition-all ${
                isActive
                  ? "bg-ink shadow-[0_8px_24px_rgba(0,0,0,0.12)] scale-[1.06]"
                  : "bg-ink/15 hover:scale-[1.04]"
              }`}
              style={{ transform: `${isActive ? "rotate(0deg)" : i % 2 === 0 ? "rotate(-6deg)" : "rotate(6deg)"} ${isActive ? "scale(1.06)" : "scale(1)"}` }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={tt.avatar}
                  alt=""
                  fill
                  sizes="64px"
                  className={`object-cover transition-opacity ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
