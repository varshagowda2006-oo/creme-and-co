import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card card-lift">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {product.group ? <span className="eyebrow">{product.group}</span> : null}
        <h3 className="text-2xl leading-tight">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="font-display text-xl font-semibold">
            {formatPrice(product.price)}
          </span>
          <Button size="sm" onClick={() => add(product.id)}>
            Add to Order
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
