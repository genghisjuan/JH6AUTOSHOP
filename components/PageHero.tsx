export default function PageHero({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="relative isolate h-[60vh] flex items-center">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-neutral-950/60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 className="max-w-4xl mx-auto text-4xl font-extrabold leading-[1.05] tracking-tight drop-shadow sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl mx-auto text-sm text-white/75 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
