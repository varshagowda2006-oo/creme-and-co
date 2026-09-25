import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import bakingProcess from "@/assets/baking-process.jpg";
import cakeBlackForest from "@/assets/cake-blackforest.jpg";
import cakeCaramel from "@/assets/cake-caramel.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import dessertMacarons from "@/assets/dessert-macarons.jpg";
import dessertTiramisu from "@/assets/dessert-tiramisu.jpg";
import drinkCappuccino from "@/assets/drink-cappuccino.jpg";
import drinkIcedLatte from "@/assets/drink-icedlatte.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";
import pastryCroissant from "@/assets/pastry-croissant.jpg";
import pastryDanish from "@/assets/pastry-danish.jpg";
import pastryEclair from "@/assets/pastry-eclair.jpg";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Crème & Co." },
      {
        name: "description",
        content:
          "A look inside the Crème & Co. bakery: cakes, pastries, coffee, desserts and the kitchen behind them.",
      },
      { property: "og:title", content: "Gallery — Crème & Co." },
      {
        property: "og:description",
        content: "A look inside our bakery, our counter and the hands behind the bakes.",
      },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: heroBakery, alt: "The bakery counter filled with cakes and pastries", tall: true },
  { src: cakeStrawberry, alt: "Strawberry dream cake on a marble stand" },
  { src: pastryCroissant, alt: "Golden butter croissants on parchment" },
  { src: drinkCappuccino, alt: "Cappuccino with latte art in a ceramic cup" },
  { src: dessertTiramisu, alt: "Classic tiramisu dusted with cocoa" },
  { src: bakingProcess, alt: "A baker kneading dough by hand", tall: true },
  { src: cakeCaramel, alt: "Caramel crunch cake with praline" },
  { src: pastryEclair, alt: "Chocolate éclairs with glossy glaze" },
  { src: drinkIcedLatte, alt: "Iced latte with milk swirls" },
  { src: pastryDanish, alt: "Fruit danishes with custard" },
  { src: dessertMacarons, alt: "Assorted macarons and mini desserts" },
  { src: cakeBlackForest, alt: "Black forest cake with cherries" },
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Gallery"
        title="A morning at Crème & Co."
        description="Cakes on the stand, pastries out of the oven, coffee on the pass. Tap any photo to see it larger."
      />

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            onClick={() => setActive(index)}
            className="group block w-full overflow-hidden rounded-3xl border border-border bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`View larger: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                image.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-5 backdrop-blur-sm animate-in fade-in"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 rounded-full bg-card p-3 text-foreground transition-colors hover:bg-accent"
          >
            <X className="size-5" />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-full max-w-3xl overflow-hidden rounded-3xl bg-card"
          >
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[75vh] w-full object-contain bg-muted"
            />
            <figcaption className="p-5 text-center text-sm text-muted-foreground">
              {images[active].alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
