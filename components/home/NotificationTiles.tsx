"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScrollFade from "@/components/ScrollFade";

type Tile = {
  key: string;
  label: string;
  from: number;
  to: number;
  displayCap?: number; // shows "99+" when above
  bg: string; // tile bg class
  badge: string; // badge variant
  icon: React.ReactNode;
  rotate: string;
  pos: string; // tailwind absolute pos on desktop
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 text-white">
      <path
        d="M3 7.5C3 6.4 3.9 5.5 5 5.5h14c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-9Z"
        fill="white"
      />
      <path
        d="M3.5 7l8 5.4c.3.2.7.2 1 0L20.5 7"
        stroke="#0a72d8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MessagesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[55%] h-[55%]" fill="white">
      <path d="M12 3C6.5 3 2 6.7 2 11.2c0 2.5 1.4 4.7 3.6 6.2-.1 1.3-.5 2.5-1.4 3.6-.2.3 0 .7.3.6 2-.2 3.9-1.1 5.2-2.2.8.2 1.6.3 2.4.3 5.5 0 10-3.7 10-8.5C22 6.7 17.5 3 12 3Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[52%] h-[52%]" fill="white">
      <path d="M6.6 2.5c-1 .2-1.6 1-1.8 2C4.2 8 6.1 12.6 9.8 16.3c3.7 3.7 8.3 5.5 11.7 4.9 1-.2 1.8-.9 2-1.8.2-1 .1-2-.5-2.9l-1.5-2.1c-.5-.7-1.4-1-2.2-.6l-2 1c-.4.2-.9.1-1.2-.2-1-.8-1.9-1.7-2.7-2.7-.3-.3-.4-.8-.2-1.2l1-2c.4-.8.1-1.7-.6-2.2L11.5 4.9c-.9-.6-1.9-.7-2.9-.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-[55%] h-[55%]">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="white"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" stroke="white" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="white" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-[60%] h-[60%]">
      <rect x="3" y="5" width="18" height="16" rx="2.4" fill="white" stroke="#e7e7e7" strokeWidth="0.5" />
      <rect x="3" y="5" width="18" height="4" rx="2.4" fill="#ff3b30" />
      <text
        x="12"
        y="18.5"
        fontSize="9"
        fontWeight="700"
        textAnchor="middle"
        fill="#0a0a0a"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        14
      </text>
    </svg>
  );
}

const tilesData: Tile[] = [
  {
    key: "mail",
    label: "Mail",
    from: 247,
    to: 0,
    bg: "icon-tile-mail",
    badge: "",
    icon: <MailIcon />,
    rotate: "-rotate-[6deg]",
    pos: "top-[12%] left-[8%] sm:left-[10%] lg:left-[14%]",
  },
  {
    key: "ig",
    label: "Instagram",
    from: 89,
    to: 0,
    bg: "icon-tile-instagram",
    badge: "",
    icon: <InstagramIcon />,
    rotate: "rotate-[8deg]",
    pos: "top-[8%] right-[12%] sm:right-[14%] lg:right-[18%]",
  },
  {
    key: "sms",
    label: "Wiadomości",
    from: 64,
    to: 0,
    bg: "icon-tile-messages",
    badge: "",
    icon: <MessagesIcon />,
    rotate: "rotate-[-9deg]",
    pos: "bottom-[14%] left-[14%] sm:left-[18%] lg:left-[22%]",
  },
  {
    key: "phone",
    label: "Telefon",
    from: 23,
    to: 0,
    bg: "icon-tile-phone",
    badge: "",
    icon: <PhoneIcon />,
    rotate: "rotate-[11deg]",
    pos: "bottom-[10%] right-[10%] sm:right-[16%] lg:right-[20%]",
  },
  {
    key: "calendar",
    label: "Kalendarz",
    from: 0,
    to: 132,
    displayCap: 99,
    bg: "icon-tile-calendar",
    badge: "",
    icon: <CalendarIcon />,
    rotate: "rotate-[2deg]",
    pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
];

function AnimatedBadge({
  from,
  to,
  trigger,
  cap,
  delay = 0,
}: {
  from: number;
  to: number;
  trigger: boolean;
  cap?: number;
  delay?: number;
}) {
  const mv = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!trigger) return;
    const controls = animate(mv, to, {
      duration: 7.6,
      delay,
      // Strong end-slowdown — quintic ease-out so the final 20% really crawls.
      ease: [0.05, 0.9, 0.15, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [trigger, to, mv, delay]);

  const text =
    cap !== undefined && display > cap ? `${cap}+` : `${display}`;

  return (
    <span className="notif-badge absolute -top-2 -right-2 flex items-center justify-center rounded-full h-[28px] min-w-[28px] px-2 text-[13px] font-semibold leading-none font-mono tabular-nums">
      {text}
    </span>
  );
}

export default function NotificationTiles() {
  const ref = useRef<HTMLDivElement>(null);
  // Animate ONLY ONCE on first reveal. Subsequent scroll up/down keeps state.
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section className="relative bg-[#0a0a0a] text-paper overflow-hidden px-5 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-24 md:py-32 lg:py-36">
      {/* faint dot bg */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,59,48,0.35) 0%, transparent 60%)",
        }}
      />

      <ScrollFade className="relative">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Headline */}
        <div className="max-w-xl order-1">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-paper/55">
            / Efekt po 90 dniach
          </span>
          <h2 className="mt-4 sm:mt-5 font-display text-[clamp(30px,6.2vw,64px)] text-paper leading-[1.03] tracking-[-0.035em] [text-wrap:balance]">
            Telefon{" "}
            <span className="text-paper/55">cichnie.</span>
            <br />
            Kalendarz{" "}
            <span className="text-paper/55">się zapełnia.</span>
          </h2>
          <p className="mt-5 sm:mt-6 max-w-md text-[14.5px] sm:text-[15px] leading-[1.6] sm:leading-[1.65] text-paper/65 [text-wrap:pretty]">
            Koniec gonienia leadów po DM-ach. Koniec sprawdzania maila co 5 minut.
            Klienci sami umawiają się przez kalendarz — Ty robisz to, co umiesz najlepiej.
          </p>

          {/* Status row */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-px bg-paper/[0.08] rounded-2xl overflow-hidden max-w-md">
            <div className="bg-[#0a0a0a] p-4 sm:p-5 flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
                Przed
              </span>
              <span className="font-display text-[22px] sm:text-[26px] text-paper leading-[1.1]">
                423 powiadomienia
              </span>
              <span className="text-[12px] text-paper/55">/ tygodniowo, średnio</span>
            </div>
            <div className="bg-[#0a0a0a] p-4 sm:p-5 flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
                Po
              </span>
              <span className="font-display text-[22px] sm:text-[26px] text-paper leading-[1.1]">
                47 rozmów
              </span>
              <span className="text-[12px] text-paper/55">/ miesięcznie, w kalendarzu</span>
            </div>
          </div>
        </div>

        {/* Tiles canvas */}
        <div
          ref={ref}
          className="relative order-2 w-full aspect-[5/4] sm:aspect-[4/3] lg:aspect-square max-w-[560px] mx-auto"
        >
          {tilesData.map((t, i) => {
            const isCenter = t.key === "calendar";
            return (
              <motion.div
                key={t.key}
                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                animate={
                  inView
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.7, y: 30 }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute ${t.pos} ${t.rotate}`}
              >
                <div
                  className={`float-slow ${
                    isCenter
                      ? "w-[112px] h-[112px] sm:w-[128px] sm:h-[128px] lg:w-[144px] lg:h-[144px]"
                      : "w-[78px] h-[78px] sm:w-[92px] sm:h-[92px] lg:w-[104px] lg:h-[104px]"
                  } relative`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <div
                    className={`${t.bg} relative w-full h-full rounded-[22%] flex items-center justify-center shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)_inset]`}
                  >
                    {t.icon}
                    <AnimatedBadge
                      from={t.from}
                      to={t.to}
                      cap={t.displayCap}
                      trigger={inView}
                      delay={0.15 + i * 0.08}
                    />
                  </div>
                  {/* tiny label below icon */}
                  <div className="absolute -bottom-6 inset-x-0 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">
                    {t.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
      </ScrollFade>
    </section>
  );
}
