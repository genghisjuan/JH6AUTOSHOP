export default function PromiseCard({ number, title, body }: { number: number; title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4 shadow-lg ring-1 ring-white/5 backdrop-blur">
      <div className="text-[11px] font-semibold tracking-wide text-white/50">PROMISE #{number}</div>
      <h3 className="mt-1 text-lg font-semibold text-white drop-shadow">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{body}</p>
    </article>
  );
}
