import Image from "next/image";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  imageAlt?: string;
};

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt = "" }: Props) {
  return (
    <section className="relative isolate flex min-h-[68svh] flex-col justify-end overflow-hidden bg-paper pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/70 to-paper/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/80 via-paper/30 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16">
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(44px,7vw,84px)] text-ink">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-[600px] text-[15px] md:text-base leading-[1.65] text-ink/75">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
