import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="Let’s Talk"
        subtitle="Questions about consulting, sourcing, or partnerships? Send a note."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 mt-10">
        <div className="mx-auto w-full max-w-3xl rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8 ring-1 ring-white/5 backdrop-blur">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const mailto = `mailto:service@jh6autoshop.com?subject=${encodeURIComponent(
                subject || "Inquiry from JH6 Autoshop"
              )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
              window.location.href = mailto;
            }}
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
              />
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Message"
                rows={6}
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              Send
            </button>
          </form>

          <div className="mt-6 grid gap-3 text-center text-sm text-white/70 sm:grid-cols-3">
            <a href="mailto:service@jh6autoshop.com" className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-white">
              service@jh6autoshop.com
            </a>
            <span className="rounded-xl px-3 py-2">Mon–Fri, 9–5 ET</span>
            <a href="tel:+17739326511" className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-white">
              (773) 932-6511
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
