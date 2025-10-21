import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <div>
      <PageHero
        title="The JH6 Gulf Heritage Rally"
        subtitle="A three-day celebration of classic motoring along Florida’s Gulf Coast — community over competition."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-24 pb-16">
        {/* Top intro / CTA */}
        <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-10 ring-1 ring-white/5 backdrop-blur">
          <p className="text-white/80 leading-relaxed">
            The JH6 Gulf Heritage Rally is a three-day classic car experience celebrating the
            craftsmanship, simplicity, and shared passion of vintage motoring. It’s not a race.
            It’s not about perfect cars. It’s about the drive, the people, and the stories along
            the way — from Orlando to the Gulf and back.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="#registration"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              Registration Details
            </a>
            <a
              href="/contact"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              Questions? Contact Us
            </a>
          </div>
        </div>

        {/* Experience / Spirit / Purpose */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
            <h3 className="text-lg font-semibold text-white">The Experience</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Scenic roads, historic towns, and coastal views. A loose convoy (not timed or scored)
              with shared waypoints each day. Evenings focus on connection—meals, stories, and the
              camaraderie that comes with old cars and open roads.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
            <h3 className="text-lg font-semibold text-white">The Spirit</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              This rally is about driving—and keeping these cars on the road. Bring tools and
              spares; cars are self-supported with fellow drivers and light support ready to help.
              You don’t need the newest or nicest car—just one that runs and makes you smile.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
            <h3 className="text-lg font-semibold text-white">The Purpose</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Proceeds support <span className="text-white">Habitat for Humanity Greater Orlando &amp; Osceola County</span>,
              helping build homes for families in need. Driving for fun is great—driving for good is even better.
            </p>
          </article>
        </div>

        {/* Cars / Eligibility */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 ring-1 ring-white/5 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">The Cars (Eligibility)</h2>
          <p className="mt-3 text-sm text-white/80">
            Participation is open to vehicles <span className="text-white">30 years or older</span> (model year 1995 or earlier) that
            embody the golden era of analog driving. Keep them true to spirit—original engines or
            period-correct replacements, minimal modifications, and a driver-focused character.
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
            <li>• Classic European coupes</li>
            <li>• Japanese ’80s/’90s icons</li>
            <li>• American cruisers</li>
            <li>• Unique survivors and oddballs</li>
          </ul>
        </div>

        {/* Format / Route */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
            <h2 className="text-lg font-semibold text-white">Format</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>• <span className="text-white">Duration:</span> 3 Days / 2 Nights</li>
              <li>• <span className="text-white">Entry Fee:</span> $300 per car (decals, welcome pack, closing celebration)</li>
              <li>• <span className="text-white">Limit:</span> 30 Cars</li>
              <li>• <span className="text-white">Support:</span> Light roadside assistance &amp; convoy coordination</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
            <h2 className="text-lg font-semibold text-white">Route</h2>
            <p className="mt-3 text-sm text-white/80">Orlando → Clearwater → Fort Myers → Orlando</p>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 ring-1 ring-white/10">
                <p className="text-white/70">Day 1</p>
                <p className="text-white">Orlando → Clearwater</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 ring-1 ring-white/10">
                <p className="text-white/70">Day 2</p>
                <p className="text-white">Clearwater → Fort Myers</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 ring-1 ring-white/10">
                <p className="text-white/70">Day 3</p>
                <p className="text-white">Fort Myers → Orlando (Closing Celebration)</p>
              </div>
            </div>
          </div>
        </div>

        {/* What makes it special */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 ring-1 ring-white/5 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">What Makes It Special</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
            <li>• A driving experience about community, not competition</li>
            <li>• Classic cars driven the way they were meant to be</li>
            <li>• Scenic roads, good company, and a shared purpose</li>
            <li>• Vintage-inspired branding, keepsakes, and photo coverage</li>
            <li>• A rally that feels like a road trip with friends—supporting a great cause</li>
          </ul>
        </div>

        {/* Registration */}
        <div id="registration" className="mt-10 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 ring-1 ring-white/5">
          <h2 className="text-lg font-semibold text-white">Registration</h2>
          <p className="mt-3 text-sm text-white/80">
            Registration opens on <span className="text-white">[insert date]</span> at{" "}
            <span className="text-white">jh6autoshop.com/rally</span>. Entries are limited to{" "}
            <span className="text-white">30 vehicles</span> to ensure a relaxed, connected experience.
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
        </div>
      </section>
    </div>
  );
}
