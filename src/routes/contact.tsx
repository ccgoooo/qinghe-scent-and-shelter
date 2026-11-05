import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Qinghe Studio" },
      { name: "description", content: "Questions, custom orders, pickup or local delivery — send us a note. Demo form, nothing is sent or stored." },
      { property: "og:title", content: "Contact — Qinghe Studio" },
      { property: "og:description", content: "Questions, custom orders, pickup or local delivery — send us a note." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true); // demo only: nothing is sent or stored
  }

  return (
    <SiteShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h1 className="text-4xl font-semibold md:text-5xl">Get in touch</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Questions, custom orders, pickup or delivery — we usually reply within a day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Visit or write</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-semibold">Shop</dt>
              <dd className="text-muted-foreground">14 Qinghe Walk, Old Town — Wed to Sun, 11am–6pm</dd>
            </div>
            <div>
              <dt className="font-semibold">Email</dt>
              <dd className="text-muted-foreground">hello@qinghestudio.example</dd>
            </div>
            <div>
              <dt className="font-semibold">Pickup & delivery</dt>
              <dd className="text-muted-foreground">In-store pickup, free delivery over $40 within ~6 miles</dd>
            </div>
          </dl>
          <p className="mt-8 rounded-lg bg-secondary p-4 text-xs text-secondary-foreground">
            This is a demo form for a fictional business. Nothing you type here is sent anywhere or saved.
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          {sent ? (
            <div role="status" className="py-10 text-center">
              <p className="font-display text-2xl font-semibold">Thanks for the note!</p>
              <p className="mt-2 text-sm text-muted-foreground">In this demo nothing was actually sent. On the real site we'd reply within a day.</p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary">
                Write another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-semibold">Name</label>
                <input id="name" name="name" required placeholder="Your name" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold">Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="What can we help with?" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm" />
              </div>
              <button type="submit" className="rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:opacity-90">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
