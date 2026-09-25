import { createFileRoute } from "@tanstack/react-router";
import drinkCappuccino from "@/assets/drink-cappuccino.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductGrid } from "@/components/site/ProductCard";
import { byCategory } from "@/lib/products";

export const Route = createFileRoute("/beverages")({
  head: () => ({
    meta: [
      { title: "Beverages — Crème & Co." },
      {
        name: "description",
        content:
          "House-roasted hot and cold coffee, spiced tea and fruit refreshers at the Crème & Co. café counter.",
      },
      { property: "og:title", content: "Beverages — Crème & Co." },
      {
        property: "og:description",
        content: "Hot coffee, cold coffee, tea and refreshers from our café counter.",
      },
    ],
  }),
  component: BeveragesPage,
});

const groups = ["Hot Coffee", "Cold Coffee", "Tea", "Refreshers"] as const;

function BeveragesPage() {
  const drinks = byCategory("Beverages");

  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="Café counter"
        title="Roasted in-house, poured with patience."
        description="Our house blend is roasted every Tuesday — a warm, chocolatey cup built for pairing with pastry. Teas are brewed to order, never held."
        image={drinkCappuccino}
      />

      {groups.map((group) => {
        const items = drinks.filter((d) => d.group === group);
        if (items.length === 0) return null;
        return (
          <section key={group} className="space-y-8">
            <div>
              <span className="eyebrow">Café</span>
              <h2 className="mt-2 text-4xl">{group}</h2>
            </div>
            <ProductGrid items={items} />
          </section>
        );
      })}
    </div>
  );
}
