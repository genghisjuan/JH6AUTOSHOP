import PageHero from "@/components/PageHero";
export default function Page() {
  return (
    <div>
      <PageHero title="Knowledge Hub" subtitle="Guides, checklists, and answers to common import questions." />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
          <p>This is the Knowledge Hub page. Replace this section with real content. Images should be added to the public/ folder and named hero.jpg for the background.</p>
        </div>
      </div>
    </div>
  );
}
