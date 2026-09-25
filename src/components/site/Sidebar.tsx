import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/cakes", label: "Cakes" },
  { to: "/pastries", label: "Pastries" },
  { to: "/beverages", label: "Beverages" },
  { to: "/specials", label: "Specials" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/order-online", label: "Order Online" },
] as const;

function Brand() {
  return (
    <Link to="/" className="block px-2 py-1">
      <span className="font-display text-3xl font-semibold leading-none">Crème &amp; Co.</span>
      <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.35em] text-muted-foreground">
        Bakery &amp; Café
      </span>
    </Link>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          activeOptions={{ exact: item.to === "/" }}
          className="rounded-full px-4 py-2.5 text-sm font-medium text-sidebar-foreground/80 transition-all duration-300 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[status=active]:bg-sidebar-primary data-[status=active]:text-sidebar-primary-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function CartBadge({ onNavigate }: { onNavigate?: () => void }) {
  const { count, total } = useCart();
  return (
    <Link
      to="/order-online"
      onClick={onNavigate}
      className="flex items-center justify-between rounded-2xl border border-sidebar-border bg-card px-4 py-3 text-sm transition-colors hover:bg-sidebar-accent"
    >
      <span className="flex items-center gap-2">
        <ShoppingBag className="size-4" />
        {count} item{count === 1 ? "" : "s"}
      </span>
      <span className="font-display text-base font-semibold">
        ₹{total.toLocaleString("en-IN")}
      </span>
    </Link>
  );
}

export function SiteSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col justify-between border-r border-sidebar-border bg-sidebar p-6 lg:flex">
        <div className="space-y-8">
          <Brand />
          <NavLinks />
        </div>
        <div className="space-y-4">
          <CartBadge />
          <p className="px-2 text-xs leading-relaxed text-muted-foreground">
            Open daily · 8:00 AM – 10:00 PM
          </p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-sidebar/95 px-4 py-3 backdrop-blur lg:hidden">
        <Brand />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border bg-card p-2.5 text-foreground transition-colors hover:bg-accent"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-foreground/30 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed inset-x-0 top-[68px] z-40 origin-top space-y-4 border-b border-border bg-sidebar p-4 shadow-[var(--shadow-card)] transition-all duration-300 lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <NavLinks onNavigate={() => setOpen(false)} />
        <CartBadge onNavigate={() => setOpen(false)} />
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-sidebar">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="font-display text-2xl">Crème &amp; Co.</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A neighbourhood bakery and café baking small batches from scratch every morning.
          </p>
        </div>
        <div className="space-y-3">
          <span className="eyebrow">Explore</span>
          <ul className="space-y-2 text-sm">
            {navItems.slice(1, 6).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <span className="eyebrow">More</span>
          <ul className="space-y-2 text-sm">
            {navItems.slice(6).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <span className="eyebrow">Visit</span>
          <p>
            42 Marigold Lane, Indiranagar
            <br />
            Bengaluru 560038
          </p>
          <p>+91 98765 43210</p>
          <p>hello@cremeandco.in</p>
        </div>
      </div>
      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Crème &amp; Co. Baked fresh, every single day.
      </div>
    </footer>
  );
}
