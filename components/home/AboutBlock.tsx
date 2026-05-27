import Image from "next/image";

export default function AboutBlock() {
  return (
    <section className="relative overflow-hidden bg-paper px-6 md:px-12 lg:px-16 py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-12 md:gap-16 lg:gap-20">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] h-full w-full overflow-hidden rounded-[28px] md:aspect-auto md:min-h-[480px] grain">
              <Image
                src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=1600&q=80&auto=format&fit=crop"
                alt="Adam — Growth Partner"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="flex max-w-[min(92vw,560px)] flex-col gap-7 text-ink md:gap-9">
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
                06 — O mnie
              </span>
              <h2 className="font-display text-[clamp(36px,5.5vw,64px)] text-ink">
                Adam.{" "}
                <span className="italic font-light text-ink/70">Marketing, który myśli jak biznes.</span>
              </h2>
              <div className="flex flex-col gap-6 text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-ink/75">
                <p>
                  Przez 8 lat budowałem marketing dla SaaS, e-commerce i marek
                  premium. W pewnym momencie zauważyłem, że trenerzy mają najlepszy
                  produkt na rynku — własne rzemiosło — ale najsłabszą maszynę
                  sprzedaży. To się zmienia.
                </p>
                <p>
                  Nie jestem agencją. Jestem jednym partnerem, który siada obok
                  Ciebie, wchodzi w Twój biznes głęboko i pracuje aż liczby się
                  zgadzają. Wynagrodzenie? W dużej części od wyników.
                </p>
                <p>
                  Mam czas dla maksymalnie 6 trenerów rocznie. Nie skaluję
                  agencji — skaluję ludzi, z którymi pracuję.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
