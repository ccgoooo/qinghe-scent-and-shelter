import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Qinghe Studio" },
      { name: "description", content: "The story behind Qinghe Studio, the people who make it, and answers to common questions." },
      { property: "og:title", content: "About — Qinghe Studio" },
      { property: "og:description", content: "The story behind Qinghe Studio, the people who make it, and answers to common questions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Mei Lin", role: "Founder & candle maker", bio: "Started pouring candles at her kitchen table in 2019; still tests every new scent batch first.", initials: "ML" },
  { name: "Daniel Kwan", role: "Soap & skincare", bio: "Handles cold-process soap from lye to label. Former pastry chef, which explains the precision.", initials: "DK" },
  { name: "Priya Shah", role: "Delivery & shop keeper", bio: "Runs the counter and the local delivery routes. Knows half the neighborhood by name.", initials: "PS" },
];

const faqs = [
  { q: "Do you really make everything by hand?", a: "Yes — candles, oils, soap and the sachets are made in small batches in our workshop. The ceramic dishes come from a local potter we work with directly." },
  { q: "How does in-store pickup work?", a: "Order anything from the products page, mention pickup when you contact us, and we'll hold it at the shop for two weeks. You'll get a note when it's ready." },
  { q: "Where do you deliver?", a: "We deliver by bicycle and van within about 6 miles of the shop, usually within 2–3 days. Delivery is free over $40." },
  { q: "Are the fragrances natural?", a: "We use pure essential oils wherever they hold up in a candle, and phthalate-free fragrance oils for the few scents that essential oils can't carry." },
  { q: "What's your return policy?", a: "If something arrives damaged or a scent isn't right for you, tell us within 30 days and we'll swap it or refund it — your choice." },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h1 className="text-4xl font-semibold md:text-5xl">Our story</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">A small studio, a slow process, and scents that don't shout.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="text-lg leading-relaxed">
          Qinghe Studio started in 2019 when Mei Lin, missing the smell of her grandmother's tea shop, decided her apartment needed a candle that smelled like pine after rain instead of synthetic vanilla. The first batch of twelve was gone in a weekend.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Six years on, we still work the same way: small batches, ingredients we can name, and a workshop you're welcome to visit. The name comes from the Qinghe river walk where Mei used to clear her head — quiet water, easy pace.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-semibold">The team</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {team.map((t) => (
            <article key={t.name} className="rounded-xl border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-display text-lg font-semibold text-secondary-foreground" aria-hidden="true">{t.initials}</div>
              <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-primary">{t.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border bg-card p-5">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="mr-2 text-primary transition-transform group-open:inline-block group-open:rotate-90" aria-hidden="true">▸</span>
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
