export default function Page() {
  return (
    <div>
      {/* Hero with image overlay (replaces PageHero title/subtitle) */}
      <section
        className="relative flex h-[70vh] w-full items-center justify-center overflow-hidden rounded-b-3xl"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
       
        <img
          src="/rally_event.png"
          alt="Gulf Heritage Rally Event"
          className="relative z-10 w-[85%] max-w-[1200px] md:w-[80%] lg:w-[70%] rounded-xl border border-white/10 shadow-lg shadow-black/40 object-contain"
        />

      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-24 pb-20">
        {/* Intro Block */}
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
              3 Days / 2 Nights
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
              Orlando → Mexico Beach → Pensacola → Orlando
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
              Limited to 30 Cars
            </span>
          </div>

          <p className="mx-auto max-w-3xl text-white/80 leading-relaxed">
            The Gulf Heritage Rally is a three-day touring event for classic and vintage automobiles
            along Florida’s Gulf Coast. Participants will drive curated routes that blend scenic
            shoreline stretches with inland roads that showcase the region’s charm and character.
            Each day features stops in historic towns, gatherings at notable landmarks, and shared
            meals that bring drivers and enthusiasts together. There is no competition, timing, or
            ranking — only an appreciation for the drive, the machines, and the community they
            create. Open to a limited number of entrants, the rally welcomes owners who share a
            passion for craftsmanship, authenticity, and the enduring spirit of motoring.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
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

        {/* Rally Highlights */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 text-center">
          {[
            {
              title: "The Experience",
              desc: "Scenic roads, historic towns, and Gulf views. A relaxed convoy, not timed or scored. With shared waypoints and nightly gatherings that celebrate connection, stories, and the joy of driving.",
            },
            {
              title: "The Cars",
              desc: "Open to vehicles 30+ years old that embody the golden era of analog driving. Original or period-correct builds, minimal modifications, and driver-focused character. From coupes to hatchbacks, all are welcome.",
            },
            {
              title: "The Purpose",
              desc: "Proceeds support Habitat for Humanity Greater Orlando & Osceola County, helping families in need. Driving for fun is great, driving for good is even better.",
            },
          ].map(({ title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/5 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>

        {/* Route Overview */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center ring-1 ring-white/5 backdrop-blur">
          <h2 className="text-xl font-semibold text-white mb-2">Route & Daily Flow</h2>
          <p className="text-sm text-white/80 mb-6">
            Orlando → Mexico Beach → Pensacola → Orlando
          </p>

          <ol className="space-y-4 text-left sm:text-center">
            {[
              {
                day: "Day 1",
                route: "Orlando → Mexico Beach",
                notes:
                  "Morning departure, relaxed pace with scenic inland routes, sunset coastal arrival, and welcome dinner.",
              },
              {
                day: "Day 2",
                route: "Mexico Beach → Pensacola",
                notes:
                  "Drive up Florida’s Gulf Coast through charming coastal towns and hidden backroads. Group lunch and evening social.",
              },
              {
                day: "Day 3",
                route: "Pensacola → Orlando",
                notes:
                  "Return journey along the inland route with a closing celebration. Every driver and co-driver recognized for completing the rally.",
              },
            ].map(({ day, route, notes }) => (
              <li
                key={day}
                className="rounded-xl border border-white/10 bg-neutral-900/40 p-4 ring-1 ring-white/10"
              >
                <p className="text-xs text-white/60">{day}</p>
                <p className="text-sm font-semibold text-white">{route}</p>
                <p className="mt-1 text-sm text-white/75">{notes}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Eligibility */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center ring-1 ring-white/5 backdrop-blur">
          <h2 className="text-xl font-semibold text-white mb-2">Eligibility & Requirements</h2>
          <p className="text-sm text-white/80 mb-4">
            Participation is open to vehicles 30 years or older (model year 1995 or earlier) that
            maintain their original driving spirit.
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2 text-left sm:text-center">
            <li>• Valid license, registration, and insurance</li>
            <li>• Basic tools / spares for repairs</li>
            <li>• Navigation (GPS or app)</li>
            <li>• Positive attitude and love of driving</li>
          </ul>
        </div>

        {/* Registration */}
        <div
          id="registration"
          className="mx-auto mt-14 max-w-4xl rounded-2xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 text-center ring-1 ring-white/5 backdrop-blur"
        >
          <h2 className="text-xl font-semibold text-white mb-3">Registration</h2>
          <p className="text-sm text-white/80">
            Registration opens on <span className="text-white">[November 1st]</span> at{" "}
            <span className="text-white">jh6autoshop.com/rally</span>. Entry limited to{" "}
            <span className="text-white">30 vehicles</span> to ensure a close-knit, relaxed
            experience.
          </p>
          <p className="mt-4 text-xs text-white/60">
            By registering, you agree to drive responsibly and understand this is a non-competitive,
            community-based event. Full terms and itinerary released before launch.
          </p>
        </div>
      </section>
    </div>
  );
}
