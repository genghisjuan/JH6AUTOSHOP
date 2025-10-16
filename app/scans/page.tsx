"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/PageHero";

type Item = {
  title: string; // Must start with "YY-YY Make Model ..." to be filterable
  price: string;
  image: string;
};

// Update names to your naming convention: "88-91 Honda CRX Radiator Bracket"
const items: Item[] = [
  { title: "89-94 Nissan R32 GT-R Front Emblem",   price: "$12.00", image: "/scans/r32_emblem.png" },
  { title: "99-02 Nissan S15 Shift Knob",          price: "$9.00",  image: "/scans/s15_shift_knob.png" },
  { title: "96-99 BMW E36 Touring Badge",          price: "$7.00",  image: "/scans/e36_touring_badge.png" },
  { title: "88-91 Honda CRX Radiator Bracket",     price: "$10.00", image: "/scans/jdm_plate_bracket.png" },
];

// Parse "YY-YY Make Model ..." -> "YY-YY Make Model"
function vehicleKeyFromTitle(title: string): string | null {
  // Quick token parse: [YY-YY] [Make] [Model] ...
  const tokens = title.trim().split(/\s+/);
  if (!/^\d{2}-\d{2}$/.test(tokens[0]) || tokens.length < 3) return null;
  const yearRange = tokens[0];
  const make = tokens[1];
  const model = tokens[2]; // keep it simple: first model token (R32, S15, E36, CRX, etc.)
  return `${yearRange} ${make} ${model}`;
}

export default function Page() {
  const [filter, setFilter] = useState<string>("all");

  // Build a unique list of vehicle filters present in the data
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
        {/* Filter */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-white/70">
            {filter === "all" ? `${items.length} items` : `${visibleItems.length} result${visibleItems.length === 1 ? "" : "s"} for “${filter}”`}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="scan-filter" className="sr-only">
              Filter by vehicle
            </label>
            <select
              id="scan-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white outline-none ring-1 ring-white/10 hover:bg-white/10 focus:ring-2 focus:ring-white/30"
            >
              <option value="all">All vehicles</option>
              {filters.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid – mirrors Merch */}
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
