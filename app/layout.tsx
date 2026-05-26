import type { Metadata } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const display = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam | Growth Partner — Systemy sprzedaży dla trenerów",
  description:
    "Buduję systemy sprzedaży dla trenerów personalnych i online. Lejki, reklamy, treści i automatyzacje, które zwiększają przychody — wynagradzany od wyników.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${sans.variable} ${display.variable}`}>
      <body className="noise font-sans antialiased text-ink-900">
        {children}
      </body>
    </html>
  );
}
