import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="Consulting"
        subtitle="Step-by-step import guidance, budgeting, and risk checks."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="relative rounded-[24px] border border-white/10 bg-white/5 p-4 sm:p-6 lg:p-8 ring-1 ring-white/5 backdrop-blur">
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Starter */}
            <article className="rounded-[20px] border border-white/10 bg-neutral-900/60 p-5 sm:p-6 ring-1 ring-white/5">
              <header className="mb-3">
                <h3 className="text-xl font-semibold text-white">Starter</h3>
                <p className="mt-1 text-sm text-white/70">
                  Fast clarity for simple imports or early planning.
                </p>
              </header>

              <div className="mt-4">
                <div className="text-4xl font-extrabold text-white">$99.00</div>
                <div className="text-xs text-white/60 mt-1">/ 30 min</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li>✓ Eligibility check: 25-year rule + VIN sanity</li>
                <li>✓ Timeline overview + typical cost ranges</li>
                <li>✓ Auction vs. dealer: quickest safe path</li>
                <li>✓ 3–5 action items to move forward</li>
              </ul>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="block w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
                >
                  Book Starter
                </a>
                <p className="mt-3 text-center text-xs text-white/60">
                  Best if you just need answers—fast.
                </p>
              </div>
            </article>

            {/* Standard (Most Popular) */}
            <article className="relative rounded-[20px] border border-white/10 bg-neutral-900/70 p-5 sm:p-6 ring-1 ring-white/5">
              <div className="pointer-events-none absolute inset-x-0 -top-4 mx-auto w-max rounded-full border border-white/20 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-900 shadow">
                Most Popular
              </div>

              <header className="mb-3">
                <h3 className="text-xl font-semibold text-white">Standard</h3>
                <p className="mt-1 text-sm text-white/70">
                  Your full import plan—clear, legal, and step-by-step.
                </p>
              </header>

              <div className="mt-4">
                <div className="text-4xl font-extrabold text-white">$179.99</div>
                <div className="text-xs text-white/60 mt-1">/ 60 min</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li>✓ Complete landed-cost model (vehicle → plate)</li>
                <li>✓ Paperwork requirements + compliance checklist</li>
                <li>✓ Sourcing strategy + risk checks (EU/Japan)</li>
                <li>✓ Broker/export playbook + warm introductions</li>
              </ul>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="block w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
                >
                  Book Standard
                </a>
                <p className="mt-3 text-center text-xs text-white/60">
                  Includes written follow-up summary with next steps.
                </p>
              </div>
            </article>

            {/* Pro */}
            <article className="rounded-[20px] border border-white/10 bg-neutral-900/60 p-5 sm:p-6 ring-1 ring-white/5">
              <header className="mb-3">
                <h3 className="text-xl font-semibold text-white">Pro</h3>
                <p className="mt-1 text-sm text-white/70">
                  Complex case? We do the thinking for you.
                </p>
              </header>

              <div className="mt-4">
                <div className="text-4xl font-extrabold text-white">$249.99</div>
                <div className="text-xs text-white/60 mt-1">/ 90 min</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li>✓ Detailed route options + landed-cost scenarios</li>
                <li>✓ VIN/market comparables + red-flag analysis</li>
                <li>✓ Auction strategy + decision framework</li>
                <li>✓ Priority action plan + broker/export handoff</li>
              </ul>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="block w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
                >
                  Book Pro
                </a>
                <p className="mt-3 text-center text-xs text-white/60">
                  Best for high-value cars or time-critical imports.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
