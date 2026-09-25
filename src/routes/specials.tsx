import { createFileRoute, Link } from "@tanstack/react-router";
import cakeBlackForest from "@/assets/cake-blackforest.jpg";
import cakeVanillaBerry from "@/assets/cake-vanillaberry.jpg";
import dessertTiramisu from "@/assets/dessert-tiramisu.jpg";
import drinkMocha from "@/assets/drink-mocha.jpg";
import pastryCinnamon from "@/assets/pastry-cinnamon.jpg";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

export const Route = createFileRoute("/specials")({
  head: () => ({
    meta: [
      { title: "Specials — Crème & Co." },
      {
        name: "description",
        content:
          "Chef's picks, seasonal desserts, weekend combos and limited-time treats from the Crème & Co. kitchen.",
      },
      { property: "og:title", content: "Specials — Crème & Co." },
      {
        property: "og:description",
        content: "Chef's picks, seasonal desserts and limited-time treats, changing every week.",
      },
    ],
  }),
  component: SpecialsPage,
});

const specials = [
  {
    id: "black-forest-cake",
    badge: "Chef's Pick",
    title: "Chef's Special",
    name: "Black Forest, reimagined",
    text: "Kirsch-soaked cherries, 70% chocolate sponge and cream whipped to order.",
    price: 869,
    image: cakeBlackForest,
  },
  {
    id: "vanilla-berry-cake",
    badge: "Seasonal",
    title: "Seasonal Dessert",
    name: "Vanilla Berry Cake",
    text: "This month's berries from the Nilgiris, on vanilla chiffon and mascarpone.",
    price: 879,
    image: cakeVanillaBerry,
  },
  {
    id: "cinnamon-roll",
    badge: "Popular",
    title: "Weekend Combo",
    name: "Two rolls + filter coffee",
    text: "Saturday and Sunday only: warm cinnamon rolls with a pot of house coffee.",
    price: 349,
    image: pastryCinnamon,
  },
  {
    id: "classic-tiramisu",
    badge: "Popular",
    title: "Dessert + Coffee Combo",
    name: "Tiramisu &amp; Mocha",
    text: "Our most-ordered pairing — classic tiramisu with a rich house mocha.",
    price: 399,
    image: dessertTiramisu,
  },
  {
    id: "mocha",
    badge: "Limited",
    title: "Limited-Time Treat",
    name: "Spiced Winter Mocha",
    text: "Cocoa, cinnamon and orange zest. On the counter until the season turns.",
    price: 199,
    image: drinkMocha,
  },
];

function SpecialsPage() {
  const { add } = useCart();

  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="This week"
        title="Specials from the pastry room."
        description="Small runs, seasonal produce and a few things our chefs simply felt like making. When they're gone, they're gone."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {specials.map((item, index) => (
          <article
            key={item.title}
            className={`group overflow-hidden rounded-3xl border border-border bg-card card-lift ${
              index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
            }`}
          >
            <div className={`overflow-hidden bg-muted ${index === 0 ? "h-full" : ""}`}>
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  index === 0 ? "h-72 lg:h-full" : "h-60"
                }`}
              />
            </div>
            <div className="space-y-3 p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-foreground">
                  {item.badge}
                </span>
                <span className="eyebrow">{item.title}</span>
              </div>
              <h2 className="text-3xl">{item.name.replace("&amp;", "&")}</h2>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="font-display text-2xl font-semibold">
                  {formatPrice(item.price)}
                </span>
                <Button className="rounded-full px-6" onClick={() => add(item.id)}>
                  Add to Order
                </Button>
                <Button asChild variant="ghost" className="rounded-full">
                  <Link to="/menu">See full menu</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
