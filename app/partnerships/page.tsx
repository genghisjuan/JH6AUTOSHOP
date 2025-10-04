import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="Partnerships"
        subtitle="We work with export agents, U.S. licensed customs brokers, and reputable dealers to build transparent, profitable pathways from port to resale. Bring your capabilities—JH6 Autoshop amplifies them."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 mt-10">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-10 ring-1 ring-white/5 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Export Agents */}
            <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
              <h3 className="text-lg font-semibold text-white">
                Export Agents (EU/Japan)
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Consistent leads with buyer requirements pre-vetted.</li>
                <li>• Vehicle verification & logistics coordination.</li>
                <li>• Clear comms, no surprises, paid on time.</li>
              </ul>
            </article>

            {/* Licensed Customs Brokers */}
            <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
              <h3 className="text-lg font-semibold text-white">
                Licensed Customs Brokers (U.S.)
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Qualified clients ready for entry filings.</li>
                <li>• Organized documentation, aligned timelines.</li>
                <li>• Long-term pipeline vs. one-off chaos.</li>
              </ul>
            </article>

            {/* Dealers */}
            <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
              <h3 className="text-lg font-semibold text-white">
                Dealers (Florida & Nationwide)
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Resale-ready imports with full provenance.</li>
                <li>• Sourcing on spec for your customers.</li>
                <li>• Referral or profit-split arrangements.</li>
              </ul>
            </article>

            {/* How We Operate */}
            <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
              <h3 className="text-lg font-semibold text-white">
                How We Operate
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Compliance-first: 25-year rule & legal entry.</li>
                <li>• Transparency on fees, roles, and timelines.</li>
                <li>• Professional comms; decisions documented.</li>
              </ul>
            </article>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              Propose a Partnership
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              Request Intro Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
