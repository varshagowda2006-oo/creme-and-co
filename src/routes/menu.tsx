import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductGrid } from "@/components/site/ProductCard";
import { byCategory, type Category } from "@/lib/products";
import dessertMacarons from "@/assets/dessert-macarons.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Crème & Co." },
      {
        name: "description",
        content:
          "Browse the full Crème & Co. menu: cakes, pastries, desserts and café beverages with prices in ₹.",
      },
      { property: "og:title", content: "Menu — Crème & Co." },
      {
        property: "og:description",
        content: "Cakes, pastries, desserts and café beverages, baked and brewed fresh daily.",
      },
    ],
  }),
  component: MenuPage,
});

const sections: Array<{ category: Category; blurb: string }> = [
  { category: "Cakes", blurb: "Celebration-ready layers, frosted the morning they leave us." },
  { category: "Pastries", blurb: "Laminated, piped and baked in small batches all day." },
  { category: "Desserts", blurb: "Little indulgences for the end of a good meal." },
  { category: "Beverages", blurb: "House-roasted coffee, leaf tea and fruit refreshers." },
];

function MenuPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="The menu"
        title="Everything we bake and brew."
        description="Four counters, one kitchen. Prices include taxes, and every item can be added straight to your online order."
        image={dessertMacarons}
      />

      <nav className="flex flex-wrap gap-2">
        {sections.map(({ category }) => (
          <a
            key={category}
            href={`#${category.toLowerCase()}`}
            className="rounded-full border border-border bg-card px-5 py-2 text-sm transition-colors hover:bg-accent"
          >
            {category}
          </a>
        ))}
      </nav>

      {sections.map(({ category, blurb }) => (
        <section key={category} id={category.toLowerCase()} className="scroll-mt-24 space-y-8">
          <div>
            <span className="eyebrow">{blurb}</span>
            <h2 className="mt-2 text-4xl">{category}</h2>
          </div>
          <ProductGrid items={byCategory(category)} />
        </section>
      ))}
    </div>
  );
}
