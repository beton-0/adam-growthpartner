"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "growthos-cookies-v1";

type Consent = {
  mode: "all" | "essential";
  ts: number;
};

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount + read storage
  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        // delay so the page settles first
        const t = setTimeout(() => setShow(true), 1400);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage blocked — still show
      const t = setTimeout(() => setShow(true), 1400);
      return () => clearTimeout(t);
    }
  }, []);

  function persist(mode: Consent["mode"]) {
    try {
      const c: Consent = { mode, ts: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch {
      // ignore
    }
    setShow(false);
  }

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Zgoda na pliki cookies"
          className="fixed z-[55] left-3 right-3 bottom-3 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-[420px] rounded-2xl border border-paper/15 bg-ink text-paper shadow-[0_24px_80px_-12px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* subtle top accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-paper/30 to-transparent" />

          <div className="p-5 sm:p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-paper/10">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-paper/80"
                  aria-hidden
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <circle cx="8.5" cy="10.5" r=".75" fill="currentColor" />
                  <circle cx="12" cy="14.5" r=".75" fill="currentColor" />
                  <circle cx="15.5" cy="9.5" r=".75" fill="currentColor" />
                </svg>
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper/65">
                Cookies
              </span>
            </div>

            <p className="text-[13.5px] leading-[1.55] text-paper/80">
              Używamy ciasteczek żeby mierzyć, co działa, i poprawiać tę
              stronę. Możesz zaakceptować wszystkie albo zostawić tylko te
              niezbędne.{" "}
              <Link
                href="/polityka-prywatnosci"
                className="underline decoration-paper/40 underline-offset-2 hover:decoration-paper"
              >
                Więcej
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => persist("all")}
                className="order-1 sm:order-2 inline-flex items-center justify-center min-h-[44px] rounded-full bg-paper text-ink px-5 py-2.5 text-[13.5px] sm:text-[13px] font-medium hover:opacity-90 active:scale-[0.97] transition-[opacity,transform]"
              >
                Akceptuję wszystkie
              </button>
              <button
                type="button"
                onClick={() => persist("essential")}
                className="order-2 sm:order-1 inline-flex items-center justify-center min-h-[44px] rounded-full border border-paper/20 px-5 py-2.5 text-[13.5px] sm:text-[13px] font-medium text-paper/90 hover:bg-paper/[0.06] hover:border-paper/35 active:scale-[0.97] transition-[opacity,transform,background-color,border-color]"
              >
                Tylko niezbędne
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
