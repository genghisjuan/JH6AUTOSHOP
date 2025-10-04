"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Home", "/"],
    ["Consulting", "/consulting"],
    ["Sourcing", "/sourcing"],
    ["Partnerships", "/partnerships"],
    ["Knowledge Hub", "/hub"],
    ["Merch", "/merch"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-neutral-900 text-sm font-semibold tracking-wider">JH6</div>
            <span className="hidden text-sm font-medium text-white/70 sm:inline">Autoshop</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {nav.map(([label, href]) => (
              <a className="hover:text-white" href={href} key={href}>{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-black/10 transition hover:bg-white md:inline">Contact</a>
            <button onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/80 md:hidden" aria-label="Menu" aria-expanded={open} aria-controls="mobile-nav">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <nav id="mobile-nav" className="mx-4 mb-4 rounded-3xl border border-white/30 bg-neutral-900/90 p-4 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-4">
              {nav.map(([label, href]) => (
                <a key={href} href={href} className="w-full max-w-[560px] rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center text-base font-medium text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
              <a href="#contact" className="w-full max-w-[560px] rounded-full bg-white/95 px-5 py-3 text-center text-base font-semibold text-neutral-900 shadow-sm ring-1 ring-black/10 hover:bg-white" onClick={() => setOpen(false)}>
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
