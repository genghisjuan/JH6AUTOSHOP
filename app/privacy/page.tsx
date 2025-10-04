import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 mt-10">
        <div className="mx-auto w-full max-w-3xl rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8 ring-1 ring-white/5 backdrop-blur">
          <div className="prose prose-invert max-w-none">
            <h2>Overview</h2>
            <p>
              We collect minimal information to provide consulting, sourcing, and support services. This policy explains what data we collect, why we collect it, and how we handle it.
            </p>

            <h3>Information We Collect</h3>
            <ul>
              <li>Contact details you provide (name, email, phone).</li>
              <li>Project details you share related to vehicle sourcing or consulting.</li>
              <li>Basic analytics (anonymous usage data).</li>
            </ul>

            <h3>How We Use Information</h3>
            <ul>
              <li>Respond to inquiries and provide services you request.</li>
              <li>Improve site performance and content.</li>
              <li>Communicate important updates related to your project.</li>
            </ul>

            <h3>Data Sharing</h3>
            <p>
              We do not sell your data. We may share limited information with service providers strictly to deliver requested services (for example, email delivery or payment processing).
            </p>

            <h3>Retention</h3>
            <p>
              We retain information only as long as necessary for service delivery, legal, or compliance purposes.
            </p>

            <h3>Your Choices</h3>
            <ul>
              <li>Request access, correction, or deletion of your data.</li>
              <li>Opt out of non-essential communications.</li>
            </ul>

            <h3>Contact</h3>
            <p>
              Email <a href="mailto:service@jh6autoshop.com">service@jh6autoshop.com</a> with privacy questions or requests.
            </p>

            <h3>Updates</h3>
            <p>
              We may update this policy to reflect changes in practices or legal requirements. The latest version will always be posted here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
