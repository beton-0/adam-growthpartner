import PulseCTA from "@/components/PulseCTA";
import ScrollFade from "@/components/ScrollFade";

export default function SubpageCta({
  title,
  subtitle,
  cta = "Umów konsultację strategiczną",
}: {
  title: React.ReactNode;
  subtitle?: string;
  cta?: string;
}) {
  return (
    <section className="bg-paper px-5 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-24 md:py-32 border-t border-ink/[0.08]">
      <ScrollFade>
        <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row md:items-end md:justify-between gap-8 sm:gap-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(28px,5.4vw,56px)] text-ink leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 sm:mt-5 max-w-md text-[14.5px] sm:text-[15px] md:text-base leading-[1.6] text-ink/70 [text-wrap:pretty]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="self-start md:self-auto">
          <PulseCTA href="/kontakt" size="lg">
            {cta}
          </PulseCTA>
        </div>
        </div>
      </ScrollFade>
    </section>
  );
}
