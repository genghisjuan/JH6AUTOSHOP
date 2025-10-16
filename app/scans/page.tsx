"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";

type Item = {
  title: string; // Must start with "YY-YY Make Model ..." to be filterable
  price: string;
  image: string;
};

// Items follow your naming convention
const items: Item[] = [
  { title: "89-94 Nissan R32 GT-R Front Emblem",   price: "$12.00", image: "/scans/r32_emblem.png" },
  { title: "99-02 Nissan S15 Shift Knob",          price: "$9.00",  image: "/scans/s15_shift_knob.png" },
  { title: "96-99 BMW E36 Touring Badge",          price: "$7.00",  image: "/scans/e36_touring_badge.png" },
  { title: "88-91 Honda CRX Radiator Bracket",     price: "$10.00", image: "/scans/jdm_plate_bracket.png" },
];

// Extract "YY-YY Make Model" for filter grouping
function vehicleKeyFromTitle(title: string): string | null {
  const tokens = title.trim().split(/\s+/);
  if (!/^\d{2}-\d{2}$/.test(tokens[0]) || tokens.length < 3) return null;
  const yearRange = tokens[0];
  const make = tokens[1];
  const model = tokens[2];
  return `${yearRange} ${make} ${model}`;
}

export default function Page() {
  const [filter, setFilter] = useState<string>("all");

  // Build unique filters dynamically from existing items
  const filters = useMemo(() => {
    const set = new Set<string>();
    for (const it of items) {
      const key = vehicleKeyFromTitle(it.title);
      if (key) set.add(key);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const visibleItems = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((it) => vehicleKeyFromTitle(it.title) === filter);
  }, [filter]);

  return (
    <div>
      <PageHero
        title="3D Scans"
        subtitle="High-quality digital meshes for fabrication — STL / OBJ / GLB."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 mt-16 sm:mt-20 lg:mt-24">
        {/* Filter header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-white/70">
            {filter === "all"
              ? `${items.length} items`
              : `${visibleItems.length} result${visibleItems.length === 1 ? "" : "s"} for “${filter}”`}
          </div>

          {/* Styled dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="scan-filter" className="sr-only">
              Filter by vehicle
            </label>
            <div className="relative">
              <select
                id="scan-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none rounded-2xl border border-white/15 bg-neutral-900/90 px-4 py-2 pr-10 text-sm text-white outline-none ring-1 ring-white/10 hover:bg-neutral-800 focus:ring-2 focus:ring-white/30 cursor-pointer transition"
              >
                <option value="all" className="bg-neutral-900 text-white">
                  All vehicles
                </option>
                {filters.map((f) => (
                  <option key={f} value={f} className="bg-neutral-900 text-white">
                    {f}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="h-4 w-4 text-white/70"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item) => (
            <li key={item.title} className="group">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-white/70">{item.price}</p>
                </div>

                <a
                  href="#"
                  className="shrink-0 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/10 hover:bg-white/15"
                >
                  Add to cart
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
