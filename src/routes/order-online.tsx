import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { useCart } from "@/lib/cart";
import { formatPrice, products, type Category } from "@/lib/products";

export const Route = createFileRoute("/order-online")({
  head: () => ({
    meta: [
      { title: "Order Online — Crème & Co." },
      {
        name: "description",
        content:
          "Build your Crème & Co. order: pick cakes, pastries, desserts and drinks, adjust quantities and check out.",
      },
      { property: "og:title", content: "Order Online — Crème & Co." },
      {
        property: "og:description",
        content: "Pick your favourites, adjust quantities and place a pickup order in minutes.",
      },
    ],
  }),
  component: OrderPage,
});

const categories: Array<Category | "All"> = ["All", "Cakes", "Pastries", "Desserts", "Beverages"];

function OrderPage() {
  const { items, total, count, add, setQuantity, remove, clear } = useCart();
  const [filter, setFilter] = useState<Category | "All">("All");
  const [placed, setPlaced] = useState<{ id: string; total: number } | null>(null);

  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);
  const packaging = count > 0 ? 40 : 0;

  function checkout() {
    setPlaced({
      id: `CC-${Math.floor(1000 + Math.random() * 9000)}`,
      total: total + packaging,
    });
    clear();
  }

  if (placed) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="max-w-lg rounded-[2rem] border border-border surface-gradient p-10 text-center">
          <span className="eyebrow">Order confirmed</span>
          <h1 className="mt-3 text-4xl">Thank you — your treats are in the oven.</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Order <strong>{placed.id}</strong> for {formatPrice(placed.total)} is confirmed. We'll
            have it boxed and ready at the counter in about 30 minutes.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button className="rounded-full px-6" onClick={() => setPlaced(null)}>
              Start a new order
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link to="/menu">Back to menu</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Order online"
        title="Build your box."
        description="Choose what you'd like, set the quantities and collect it fresh from Marigold Lane. Payment happens at pickup."
      />

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                  filter === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {visible.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 rounded-2xl border border-border bg-card p-4 card-lift"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="size-24 shrink-0 rounded-xl object-cover"
                />
                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div>
                    <h3 className="text-lg leading-tight">{product.name}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-lg font-semibold">
                      {formatPrice(product.price)}
                    </span>
                    <Button size="sm" className="rounded-full" onClick={() => add(product.id)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-border bg-card p-7 lg:sticky lg:top-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Your cart</h2>
            <span className="text-sm text-muted-foreground">
              {count} item{count === 1 ? "" : "s"}
            </span>
          </div>

          {items.length === 0 ? (
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Your cart is empty. Add a cake, a croissant and a coffee — that's the classic order.
            </p>
          ) : (
            <>
              <ul className="mt-6 space-y-4">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-3 border-b border-border pb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="size-14 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-medium leading-tight">{product.name}</span>
                        <button
                          type="button"
                          aria-label={`Remove ${product.name}`}
                          onClick={() => remove(product.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            aria-label={`Decrease ${product.name} quantity`}
                            onClick={() => setQuantity(product.id, quantity - 1)}
                            className="rounded-full border border-border p-1.5 transition-colors hover:bg-accent"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm">{quantity}</span>
                          <button
                            type="button"
                            aria-label={`Increase ${product.name} quantity`}
                            onClick={() => setQuantity(product.id, quantity + 1)}
                            className="rounded-full border border-border p-1.5 transition-colors hover:bg-accent"
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          {formatPrice(product.price * quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Packaging</dt>
                  <dd>{formatPrice(packaging)}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3 font-display text-xl font-semibold">
                  <dt>Total</dt>
                  <dd>{formatPrice(total + packaging)}</dd>
                </div>
              </dl>

              <Button size="lg" className="mt-6 w-full rounded-full" onClick={checkout}>
                Checkout
              </Button>
              <Button variant="ghost" className="mt-2 w-full rounded-full" onClick={clear}>
                Clear cart
              </Button>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
