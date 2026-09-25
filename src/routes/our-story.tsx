import { createFileRoute, Link } from "@tanstack/react-router";
import bakingProcess from "@/assets/baking-process.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";
import pastryAlmond from "@/assets/pastry-almond.jpg";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Crème & Co." },
      {
        name: "description",
        content:
          "From a two-oven kitchen to a neighbourhood favourite: the story, philosophy and people behind Crème & Co.",
      },
      { property: "og:title", content: "Our Story — Crème & Co." },
      {
        property: "og:description",
        content: "The story, philosophy and people behind the Crème & Co. bakery and café.",
      },
    ],
  }),
  component: OurStory,
});

const timeline = [
  ["2012", "Two ovens, one counter", "Ana and Rohan open a tiny bake shop on Marigold Lane."],
  ["2015", "The café arrives", "Twelve seats, a espresso machine and morning regulars."],
  ["2019", "Our own patisserie kitchen", "A dedicated pastry room for laminated doughs."],
  ["2024", "Baking for the city", "Custom celebration cakes delivered across Bengaluru."],
];

function OurStory() {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Our story"
        title="A small bakery with a very long morning."
        description="Crème & Co. began as a two-oven kitchen with a simple promise: bake everything fresh, by hand, the way we would for our own table. Twelve years later, that promise still sets our alarm at four."
        image={heroBakery}
      />

      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
          <img
            src={bakingProcess}
            alt="A baker kneading dough on a floured wooden table"
            loading="lazy"
            className="h-80 w-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <span className="eyebrow">Our philosophy</span>
          <h2 className="text-4xl">Slow dough, honest butter, no shortcuts.</h2>
          <p className="leading-relaxed text-muted-foreground">
            We ferment our doughs overnight so the flavour has time to develop. Our croissants
            are laminated across three days, our ganache is tempered in small batches, and every
            cake is frosted the morning it is collected.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Nothing leaves our kitchen with a preservative, a premix or a shortcut. If it isn't
            good enough for the family table, it doesn't reach the counter.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Fresh ingredients",
            text: "Fruit from growers we visit, single-origin chocolate, cultured French butter and Madagascar vanilla. We change the menu with the season because the produce tells us to.",
          },
          {
            title: "Handcrafted preparation",
            text: "Every swirl, shell and shard of praline is made by a baker, not a machine. Small batches mean we can taste as we go and stop the moment it's right.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-border bg-card p-8 card-lift">
            <h3 className="text-2xl">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <div>
          <span className="eyebrow">Milestones</span>
          <h2 className="mt-2 text-4xl">How we grew</h2>
        </div>
        <ol className="relative space-y-8 border-l border-border pl-8">
          {timeline.map(([year, title, text]) => (
            <li key={year} className="relative">
              <span className="absolute -left-[2.35rem] mt-1.5 size-3 rounded-full bg-gold" />
              <span className="font-display text-xl font-semibold">{year}</span>
              <h3 className="text-2xl">{title}</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid items-center gap-8 rounded-[2rem] border border-border surface-gradient p-8 md:grid-cols-2 md:p-12">
        <div className="space-y-4">
          <span className="eyebrow">Visit us</span>
          <h2 className="text-4xl">Pull up a chair on Marigold Lane.</h2>
          <p className="leading-relaxed text-muted-foreground">
            Sunlight, slow mornings and the smell of butter. We'd love to bake for you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Visit us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link to="/menu">See the menu</Link>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img
            src={pastryAlmond}
            alt="Almond croissants dusted with sugar"
            loading="lazy"
            className="h-64 w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
