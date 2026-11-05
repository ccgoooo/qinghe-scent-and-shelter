import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qinghe Studio — Handmade Aromatherapy & Home Goods" },
      { name: "description", content: "Small-batch candles, oils and home goods. In-store pickup and local delivery." },
      { property: "og:title", content: "Qinghe Studio — Handmade Aromatherapy & Home Goods" },
      { property: "og:description", content: "Small-batch candles, oils and home goods. In-store pickup and local delivery." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-32">
          <p className="text-sm uppercase tracking-widest text-accent-foreground/70">Handmade · Small batch · Local</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">Quiet scents for slower days.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Qinghe Studio makes candles, oils and little home comforts by hand. Pick up in store or get it delivered around town.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Shop the collection</Link>
            <Link to="/about" className="rounded-full border border-primary px-6 py-3 font-semibold text-primary">Our story</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">Featured</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12">
          <h2 className="text-3xl font-semibold">Have a question or a custom order?</h2>
          <p className="mx-auto mt-3 max-w-lg opacity-90">We're happy to help with gifts, refills and local delivery.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Get in touch</Link>
        </div>
      </section>
    </SiteShell>
  );
}
