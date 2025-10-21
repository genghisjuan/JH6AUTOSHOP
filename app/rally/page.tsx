import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="The JH6 Gulf Heritage Rally"
        subtitle="Classic motoring along Florida’s Gulf Coast — community over competition."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-24 pb-20">
        {/* Hero tagline + primary CTAs */}
        <div className="mx-auto w-full max-w-5xl rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-10 ring-1 ring-white/5 backdrop-blur">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
                3 Days / 2 Nights
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
                Orlando → Clearwater → Fort Myers → Orlando
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
                Limited to 30 Cars
              </span>
            </div>

            <p className="max-w-3xl text-white/80 leading-relaxed">
              A three-day celebration of analog driving: beautiful roads, coastal towns, and a
              like-minded convoy. It’s not a race. It’s about the drive, the people, and the stories.
            </p>

            <div className="mt-2 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="#registration"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white text-center ring-1 ring-white/10 hover:bg-white/15"
              >
                Registration Details
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white text-center ring-1 ring-white/10 hover:bg-white/15"
              >
                Questions? Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Entry Fee", v: "$300 / car" },
            { k: "Eligibility", v: "1995 or earlier" },
            { k: "Support", v: "Light roadside + convoy" },
            { k: "Purpose", v: "Habitat for Humanity" },
          ].map(({ k, v }) => (
            <div
              key={k}
              className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 ring-1 ring-white/5"
            >
              <p className="text-xs uppercase tracking-wide text-white/60">{k}</p>
              <p className="mt-1 text-sm font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>

        {/* Three pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
            <h3 className="text-lg font-semibold text-white">The Experience</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Scenic roads, historic towns, and Gulf views. We travel in a loose convoy (not timed
              or scored) with shared waypoints each day. Evenings focus on connection — meals,
              stories, and the camaraderie that comes with old cars and open roads.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
            <h3 className="text-lg font-semibold text-white">The Cars</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Open to vehicles <span className="text-white">30+ years old</span> that embody the
              golden era of analog driving. Original or period-correct engines, minimal
              modifications, and a driver-focused character. Diversity is the point — coupes,
              hatchbacks, cruisers, oddballs.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
            <h3 className="text-lg font-semibold text-white">The Purpose</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Proceeds support{" "}
              <span className="text-white">Habitat for Humanity Greater Orlando &amp; Osceola County</span>.
              Driving for fun is great — driving for good is even better.
            </p>
          </article>
        </div>

        {/* Route Timeline */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 ring-1 ring-white/5 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Route &amp; Daily Flow</h2>
          <ol className="mt-6 space-y-4">
            {[
              {
                day: "Day 1",
                route: "Orlando → Clearwater",
                notes:
                  "Registration, drivers’ brief, convoy start. Scenic backroads; coastal sunset arrival.",
              },
              {
                day: "Day 2",
                route: "Clearwater → Fort Myers",
                notes:
                  "Gulf towns, small-business stops, shared lunch. Evening social and car talk.",
              },
              {
                day: "Day 3",
                route: "Fort Myers → Orlando",
                notes:
                  "Final coastal stretch; relaxed return. Closing celebration with recognition for all finishers.",
              },
            ].map(({ day, route, notes }) => (
              <li
                key={day}
                className="grid gap-2 rounded-xl border border-white/10 bg-neutral-900/40 p-4 ring-1 ring-white/10 sm:grid-cols-5"
              >
                <div className="sm:col-span-2">
                  <p className="text-xs text-white/60">{day}</p>
                  <p className="text-sm font-semibold text-white">{route}</p>
                </div>
                <p className="sm:col-span-3 text-sm text-white/80">{notes}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Eligibility checklist */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 ring-1 ring-white/5 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">What To Bring</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
            <li>• Valid license, registration, and insurance</li>
            <li>• Basic tools / spares (fluids, belts, fuses)</li>
            <li>• Phone mount &amp; charger for navigation</li>
            <li>• Good vibes and a sense of adventure</li>
          </ul>
        </div>

        {/* FAQ (no client JS; accessible) */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
          <h2 className="text-lg font-semibold text-white">Rally FAQ</h2>
          <div className="mt-4 divide-y divide-white/10">
            {[
              {
                q: "Is it a race?",
                a: "No. It’s a scenic convoy with shared waypoints. No timing, no scoring — just good driving.",
              },
              {
                q: "What if my car breaks?",
                a: "Self-supported with a light support team and fellow drivers ready to help. Bring essentials.",
              },
              {
                q: "Refund policy?",
                a: "If you can’t make it, contact us as early as possible — we’ll try to fill your spot from the waitlist.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group py-3">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white/90 hover:text-white">
                  {q}
                  <span className="float-right text-white/50 transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 text-sm text-white/75">{a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Registration */}
        <div
          id="registration"
          className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 ring-1 ring-white/5 backdrop-blur"
        >
          <h2 className="text-xl font-semibold text-white">Registration</h2>
          <p className="mt-3 text-sm text-white/80">
            Registration opens on <span className="text-white">[insert date]</span> at{" "}
            <span className="text-white">jh6autoshop.com/rally</span>. Limited to{" "}
            <span className="text-white">30 vehicles</span> to keep things relaxed and connected.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              Get Notified
            </a>
            <a
              href="#"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              Rally FAQ (soon)
            </a>
          </div>
          <p className="mt-4 text-xs text-white/60">
            By registering, you agree to operate your vehicle safely and accept the inherent risks of
            vintage motoring. Full terms provided at registration.
          </p>
        </div>
      </section>
    </div>
  );
}
