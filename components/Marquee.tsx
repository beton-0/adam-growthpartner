"use client";

const items = [
  "Trenerzy personalni",
  "Trenerzy online",
  "Dietetycy",
  "Coachowie",
  "Sylwetka",
  "Siła",
  "Hipertrofia",
  "Kobiety w treningu",
  "Mężczyźni 30+",
  "Sportowcy",
];

export default function Marquee() {
  return (
    <div className="marquee-mask overflow-hidden py-10 border-y border-ink-200/60">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-8 text-ink-500">
            <span className="font-display italic text-3xl">{item}</span>
            <span className="ml-16 w-1.5 h-1.5 rounded-full bg-ink-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
