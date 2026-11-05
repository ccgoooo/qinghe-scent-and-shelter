import type { products } from "@/lib/site";

export function ProductCard({ p }: { p: (typeof products)[number] }) {
  return (
    <article className="overflow-hidden rounded-xl border bg-card">
      <div className={`${p.ph} flex aspect-[4/3] items-center justify-center text-5xl`} role="img" aria-label={`Placeholder image for ${p.name}`}>
        {p.icon}
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <span className="font-semibold text-primary">${p.price}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
      </div>
    </article>
  );
}
