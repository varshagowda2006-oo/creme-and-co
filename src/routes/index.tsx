import { createFileRoute, Link } from "@tanstack/react-router";
import { Croissant, Leaf, Sparkles, Wheat } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crème & Co. — Baked with Love, Served with Joy" },
      {
        name: "description",
        content:
          "Handcrafted cakes, delicate pastries and comforting coffee, made fresh for your sweetest moments.",
      },
      { property: "og:title", content: "Crème & Co. — Baked with Love, Served with Joy" },
      {
        property: "og:description",
        content: "A neighbourhood bakery and café baking small batches from scratch every morning.",
      },
    ],
  }),
  component: Home,
});

const featuredIds = [
  "belgian-chocolate-cake",
  "butter-croissant",
  "cappuccino",
  "strawberry-dream-cake",
  "chocolate-eclair",
  "classic-tiramisu",
];

const highlights = [
  {
    icon: Wheat,
    title: "Freshly Baked Daily",
    text: "Our ovens start at 4 AM so every shelf is filled before the first cup is poured.",
  },
  {
    icon: Croissant,
    title: "Handcrafted by Bakers",
    text: "Every layer is laminated, piped and finished by hand — never by machine.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    text: "French butter, single-origin chocolate and fruit from local growers.",
  },
  {
    icon: Sparkles,
    title: "Made for Moments",
    text: "Custom celebration cakes and hampers crafted around your occasion.",
  },
];

function Home() {
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="space-y-20">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-6">
          <span className="eyebrow">Bakery &amp; Café · Since 2012</span>
          <h1 className="text-5xl leading-[1.05] md:text-6xl">
            Baked with Love,
            <br />
            Served with Joy.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Handcrafted cakes, delicate pastries and comforting coffee, made fresh for your
            sweetest moments.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/menu">Explore Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link to="/order-online">Order Online</Link>
            </Button>
          </div>
          <dl className="grid max-w-md grid-cols-3 gap-6 pt-4">
            {[
              ["12", "Years baking"],
              ["40+", "Daily bakes"],
              ["4.9", "Guest rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl font-semibold">{value}</dt>
                <dd className="text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
          <img
            src={heroBakery}
            alt="The Crème & Co. bakery counter filled with cakes and pastries"
            width={1536}
            height={1024}
            className="h-[26rem] w-full object-cover lg:h-[34rem]"
          />
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Guest favourites</span>
            <h2 className="mt-2 text-4xl">Featured from the counter</h2>
          </div>
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/menu">View full menu →</Link>
          </Button>
        </div>
        <ProductGrid items={featured} />
      </section>

      <section className="rounded-[2rem] border border-border surface-gradient p-8 md:p-12">
        <span className="eyebrow">Why choose us</span>
        <h2 className="mt-2 max-w-2xl text-4xl">Why Choose Crème &amp; Co.</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 card-lift"
            >
              <Icon className="size-6 text-gold" />
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 rounded-[2rem] border border-border bg-card p-10 text-center md:p-14">
        <span className="eyebrow">Come say hello</span>
        <h2 className="max-w-2xl text-4xl">
          Warm bread, warmer welcome — every day from 8 AM.
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/order-online">Start an order</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <Link to="/contact">Find our café</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
