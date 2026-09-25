import { createFileRoute } from "@tanstack/react-router";
import pastryCroissant from "@/assets/pastry-croissant.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductGrid } from "@/components/site/ProductCard";
import { byCategory } from "@/lib/products";

export const Route = createFileRoute("/pastries")({
  head: () => ({
    meta: [
      { title: "Pastries — Crème & Co." },
      {
        name: "description",
        content:
          "Butter croissants, éclairs, danishes and cinnamon rolls, laminated by hand and baked in small batches.",
      },
      { property: "og:title", content: "Pastries — Crème & Co." },
      {
        property: "og:description",
        content: "Laminated by hand over three days and baked in small batches all day long.",
      },
    ],
  }),
  component: PastriesPage,
});

function PastriesPage() {
  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="Pastries"
        title="Sixty-four layers, three slow days."
        description="Our viennoiserie is folded with cultured French butter and rested overnight. Trays come out of the oven at 8 AM, 12 PM and 4 PM."
        image={pastryCroissant}
      />

      <ProductGrid items={byCategory("Pastries")} />

      <section className="grid gap-6 sm:grid-cols-3">
        {[
          ["8:00 AM", "First bake — croissants and danishes"],
          ["12:00 PM", "Midday bake — rolls and choux"],
          ["4:00 PM", "Evening bake — everything, again"],
        ].map(([time, text]) => (
          <div key={time} className="rounded-2xl border border-border bg-card p-6 card-lift">
            <span className="font-display text-2xl font-semibold">{time}</span>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
