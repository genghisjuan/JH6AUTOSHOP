import PageHero from "@/components/PageHero";

type Item = {
  title: string;
  price: string;
  image: string;
};

const items: Item[] = [
  { title: "JH6 AOP Tee", price: "$38.00", image: "/jh6_aop_tee.png" },
  { title: "JH6 Logo Tee", price: "$28.00", image: "/jh6_logo_tee.png" },
  { title: "JH6 Globe Sticker", price: "$6.00", image: "/jh6_sticker.png" },
  { title: "JH6 Logo Hat", price: "$24.00", image: "/jh6_hat.png" },
];

export default function Page() {
  return (
    <div>
      <PageHero
        title="Merch"
        subtitle="Support the build — new drops coming soon."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
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
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
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
