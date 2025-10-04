import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="We keep things simple: collect less, protect more."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 mt-10">
        <div className="mx-auto w-full max-w-3xl rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-10 ring-1 ring-white/5 backdrop-blur">
          <div className="space-y-8">
            <header className="text-center">
              <p className="text-sm text-white/60">Last updated: 2025</p>
            </header>

            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <p className="mt-2 leading-relaxed text-white/80">
                We collect minimal information to provide consulting, sourcing, and support
                services. This policy explains what data we collect, why we collect it, and how
                we handle it.
              </p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
              <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-white/80">
                <li>Contact details you provide (name, email, phone).</li>
                <li>Project details you share related to vehicle sourcing or consulting.</li>
                <li>Basic analytics (anonymous usage data).</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
              <h2 className="text-xl font-semibold text-white">How We Use Information</h2>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-white/80">
                <li>Respond to inquiries and provide services you request.</li>
                <li>Improve site performance and content.</li>
                <li>Communicate important updates related to your project.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
              <h2 className="text-xl font-semibold text-white">Data Sharing</h2>
              <p className="mt-2 leading-relaxed text-white/80">
                We do not sell your data. We may share limited information with service
                providers strictly to deliver requested services (for example, email delivery or
                payment processing).
              </p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
              <h2 className="text-xl font-semibold text-white">Retention</h2>
              <p className="mt-2 leading-relaxed text-white/80">
                We retain information only as long as necessary for service delivery, legal, or
                compliance purposes.
              </p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
              <h2 className="text-xl font-semibold text-white">Your Choices</h2>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-white/80">
                <li>Request access, correction, or deletion of your data.</li>
                <li>Opt out of non-essential communications.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p className="mt-2 leading-relaxed text-white/80">
                Email{" "}
                <a
                  href="mailto:service@jh6autoshop.com"
                  className="underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  service@jh6autoshop.com
                </a>{" "}
                with privacy questions or requests.
              </p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
              <h2 className="text-xl font-semibold text-white">Updates</h2>
              <p className="mt-2 leading-relaxed text-white/80">
                We may update this policy to reflect changes in practices or legal requirements.
                The latest version will always be posted here.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
