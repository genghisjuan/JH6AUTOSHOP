import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="Vehicle Sourcing"
        subtitle="Looking for a specific car from the EU or Japan? We handle the hard part. JH6 Autoshop locates vehicles that meet your specs, verifies sellers, and works directly with export agents to ensure a smooth process. We operate with full transparency—providing detailed options and total landed cost estimates upfront."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 mt-10">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 sm:p-8 ring-1 ring-white/5 backdrop-blur">
          <div className="mx-auto w-full max-w-4xl">
            <h2 className="text-2xl font-semibold text-white">How It Works</h2>

            <ol className="mt-6 space-y-4 text-white/80">
              <li>
                <span className="font-semibold text-white">1. Define Your Needs:</span>{" "}
                Tell us your target make, model, specs, and budget.
              </li>
              <li>
                <span className="font-semibold text-white">2. We Search &amp; Vet:</span>{" "}
                We search platforms like theparking.eu, mobile.de, Goo-net, and USS Auctions,
                verifying seller legitimacy and vehicle condition.
              </li>
              <li>
                <span className="font-semibold text-white">3. You Decide:</span>{" "}
                Choose your preferred option, and we handle the export coordination.
              </li>
            </ol>

            <p className="mt-6 text-sm text-white/70">
              Sourcing Fee: <span className="font-semibold text-white">$500–$2,000</span>{" "}
              based on vehicle value and complexity of the search.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
              >
                Request Sourcing
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
              >
                See Sample Report
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
