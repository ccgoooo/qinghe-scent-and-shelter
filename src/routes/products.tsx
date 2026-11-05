import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Qinghe Studio" },
      { name: "description", content: "Browse our handmade candles, oils, soaps and home goods. In-store pickup and local delivery." },
      { property: "og:title", content: "Products — Qinghe Studio" },
      { property: "og:description", content: "Browse our handmade candles, oils, soaps and home goods. In-store pickup and local delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h1 className="text-4xl font-semibold md:text-5xl">The collection</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Everything is poured, blended or finished by hand in small batches. Prices are in USD; pickup and local delivery are arranged after checkout by email.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Looking for a scent we don't stock, or a gift set? <a href="/contact" className="text-primary underline underline-offset-4">Ask us</a> — custom orders are usually ready within a week.
        </p>
      </section>
    </SiteShell>
  );
}
