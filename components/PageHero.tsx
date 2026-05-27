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
    <section className="relative isolate flex min-h-[60svh] sm:min-h-[68svh] flex-col justify-end overflow-hidden bg-paper pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24">
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
        <div className="absolute inset-0 bg-gradient-to-r from-paper/85 via-paper/30 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-12 lg:px-16">
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-ink/55">
          {eyebrow}
        </span>
        <h1 className="mt-3 sm:mt-4 max-w-[18ch] font-display text-[clamp(34px,7vw,84px)] text-ink leading-[1.02] tracking-[-0.035em] [text-wrap:balance] break-words">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 sm:mt-6 max-w-[600px] text-[14.5px] sm:text-[15px] md:text-base leading-[1.6] sm:leading-[1.65] text-ink/75 [text-wrap:pretty]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
