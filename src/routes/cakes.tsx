import { createFileRoute, Link } from "@tanstack/react-router";
import cakeCaramel from "@/assets/cake-caramel.jpg";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductGrid } from "@/components/site/ProductCard";
import { byCategory } from "@/lib/products";

export const Route = createFileRoute("/cakes")({
  head: () => ({
    meta: [
      { title: "Cakes — Crème & Co." },
      {
        name: "description",
        content:
          "Belgian chocolate, red velvet, black forest and more — celebration cakes frosted fresh at Crème & Co.",
      },
      { property: "og:title", content: "Cakes — Crème & Co." },
      {
        property: "og:description",
        content: "Handcrafted celebration cakes, frosted the morning they leave our kitchen.",
      },
    ],
  }),
  component: CakesPage,
});

function CakesPage() {
  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="Cakes"
        title="Layers worth lighting a candle for."
        description="Each cake is baked to order, filled by hand and finished the morning you collect it. Need a custom size or message? Tell us on the contact page."
        image={cakeCaramel}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild className="rounded-full px-6">
            <Link to="/order-online">Order a cake</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link to="/contact">Request a custom cake</Link>
          </Button>
        </div>
      </PageHeader>

      <ProductGrid items={byCategory("Cakes")} />

      <section className="rounded-[2rem] border border-border surface-gradient p-8 md:p-12">
        <h2 className="text-3xl">Good to know</h2>
        <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
          <li>All cakes are 500g by default; 1kg available on request.</li>
          <li>Eggless versions available for every cake with 24 hours' notice.</li>
          <li>Custom messages piped free of charge.</li>
        </ul>
      </section>
    </div>
  );
}
