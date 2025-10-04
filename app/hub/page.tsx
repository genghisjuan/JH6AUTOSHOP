import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="Knowledge Hub"
        subtitle="Guides and case studies. We'll add a CMS later; for now, here are static pieces."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 mt-10">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-10 ring-1 ring-white/5 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Article 1 */}
            <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
              <h3 className="text-lg font-semibold text-white">
                25-Year Rule: What You Really Need
              </h3>
              <p className="mt-3 text-sm text-white/80">
                A plain-English walkthrough of eligibility, paperwork, and typical costs to
                import legally.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-white/90"
              >
                Read →
              </a>
            </article>

            {/* Article 2 */}
            <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
              <h3 className="text-lg font-semibold text-white">
                Case Study: BMW E36 Touring
              </h3>
              <p className="mt-3 text-sm text-white/80">
                How we sourced and shipped a clean E36 Touring — timelines, costs, and
                lessons learned.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-white/90"
              >
                Read →
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
