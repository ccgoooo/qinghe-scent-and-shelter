import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="font-display text-xl font-semibold text-primary">Qinghe Studio</Link>
          <button className="rounded-md border px-3 py-1 text-sm md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
            Menu
          </button>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm hover:text-primary" activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        {open && (
          <nav className="flex flex-col border-t px-4 py-2 md:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2" activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          <p className="font-display text-base text-foreground">Qinghe Studio</p>
          <p className="mt-1">Handmade aromatherapy & home goods · In-store pickup and local delivery</p>
          <p className="mt-4">© 2026 Qinghe Studio (fictional business)</p>
        </div>
      </footer>
    </div>
  );
}
