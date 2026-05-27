"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-paper lg:h-svh lg:min-h-0">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=2400&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Warm paper-tinted overlay so headline reads on any image */}
        <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/60 to-paper/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper/70 via-transparent to-transparent" />
      </div>

      {/* Soft bottom glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[600px] w-[800px] rounded-full bg-paper/90 blur-[120px] -z-10"
      />

      {/* Content */}
      <div className="relative z-10 mt-auto flex w-full flex-col items-start gap-7 px-6 md:px-12 lg:px-16 pt-32 pb-16 lg:absolute lg:bottom-[14vh] lg:left-16 lg:max-w-[640px] lg:px-0 lg:pt-0 lg:pb-0">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ink/70"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Przyjmuję 2 nowych trenerów w tym kwartale
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-[clamp(44px,7.4vw,84px)] text-ink"
        >
          Buduję systemy sprzedaży{" "}
          <span className="italic font-light text-ink/85">dla trenerów</span>,
          którzy chcą skalować.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-[520px] text-[15px] md:text-base leading-[1.6] text-ink/75"
        >
          Lejki, reklamy, treści i automatyzacje, które realnie zwiększają
          przychody trenerów personalnych i online. Wynagradzany od wyników —
          nie od godzin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            href="/kontakt"
            className="relative inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium leading-none text-paper transition-[opacity,scale] duration-150 hover:opacity-90 active:scale-[0.97]"
          >
            Umów bezpłatną rozmowę
          </Link>
          <Link
            href="/wyniki"
            className="relative inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium leading-none text-ink hover:opacity-70 transition-opacity"
          >
            Zobacz wyniki →
          </Link>
        </motion.div>
      </div>

      {/* Tiny scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-6 right-6 md:right-12 lg:right-16 z-10 hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink/55"
      >
        <span>Przewiń</span>
        <span className="inline-block h-px w-10 bg-ink/40" />
      </motion.div>
    </section>
  );
}
