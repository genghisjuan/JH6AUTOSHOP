export default function PageHero({ title, subtitle }: { title: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/hero.jpg)" }} aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-neutral-950/60" />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-[calc(72px+env(safe-area-inset-top))] sm:px-6 sm:pb-24 sm:pt-[calc(96px+env(safe-area-inset-top))]">
        <div className="mb-6 flex flex-wrap gap-2 text-[11px] font-semibold tracking-wide text-white/70">
          {["Import", "Consulting", "Sourcing"].map((t) => (
            <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 uppercase">{t}</span>
          ))}
        </div>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight drop-shadow sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-3xl text-sm text-white/75 sm:text-base">{subtitle}</p>}
      </div>
    </section>
  );
}
