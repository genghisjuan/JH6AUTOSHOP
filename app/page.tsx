import PageHero from "@/components/PageHero";
import PromiseCard from "@/components/PromiseCard";

export default function Page() {
  return (
    <div>
      <PageHero
        title={<>Trusted Import Guidance for<br className="hidden sm:block" /><span className="block">the Cars You Want Most</span></>}
        subtitle={"JH6 Autoshop navigates the 25‑year rule, sources vehicles from the EU & Japan, and works with trusted exporters and customs brokers."}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <PromiseCard number={1} title="25‑Year Rule, Made Simple" body="Clear step‑by‑step guidance. Know exactly what to do, who to hire, and when to move." />
          <PromiseCard number={2} title="Verified Global Sourcing" body="EU/Japan networks, vetted sellers, and trusted exporters. The right car without the scams." />
          <PromiseCard number={3} title="Compliance Without Confusion" body="Licensed brokers handle filings. Legal, transparent, and on‑time—from port to plate." />
        </div>
      </div>
    </div>
  );
}
