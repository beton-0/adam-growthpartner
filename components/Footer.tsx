"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-ink-900 text-ink-400 border-t border-ink-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="font-medium text-white">
                Adam <span className="text-ink-500">| Growth Partner</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Buduję systemy sprzedaży dla trenerów personalnych i online.
              Rozliczam się od wyników.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-ink-500 mb-4">
              Strona
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#dla-kogo" className="hover:text-white transition-colors">
                  Dla kogo
                </a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Usługi
                </a>
              </li>
              <li>
                <a href="#proces" className="hover:text-white transition-colors">
                  Proces
                </a>
              </li>
              <li>
                <a href="#wyniki" className="hover:text-white transition-colors">
                  Wyniki
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Najczęstsze pytania
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-ink-500 mb-4">
              Kontakt
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#kontakt"
                  className="hover:text-white transition-colors"
                >
                  Umów rozmowę
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@example.com"
                  className="hover:text-white transition-colors"
                >
                  kontakt@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white transition-colors"
                >
                  Instagram →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-800 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-500">
          <span>© {new Date().getFullYear()} Adam · wszystkie prawa zastrzeżone</span>
          <span className="font-mono">v 1.0 · made with care</span>
        </div>
      </div>
    </footer>
  );
}
