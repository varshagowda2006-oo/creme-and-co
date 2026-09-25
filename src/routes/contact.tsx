import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Crème & Co." },
      {
        name: "description",
        content:
          "Visit Crème & Co. on Marigold Lane, Bengaluru. Opening hours, phone, email and a message form for custom orders.",
      },
      { property: "og:title", content: "Contact — Crème & Co." },
      {
        property: "og:description",
        content: "Find our café, opening hours and how to reach us for custom orders.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, label: "Address", value: "42 Marigold Lane, Indiranagar, Bengaluru 560038" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@cremeandco.in" },
  { icon: Clock, label: "Opening hours", value: "Mon – Sun · 8:00 AM to 10:00 PM" },
];

function ContactPage() {
  const [sent, setSent] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    setSent(name || "friend");
    toast.success("Message sent", { description: "We usually reply within a few hours." });
    form.reset();
  }

  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="Contact"
        title="Come by, call, or send a note."
        description="Planning a celebration cake or a corporate hamper? Tell us the date and the flavour and we'll take it from there."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6 card-lift"
            >
              <Icon className="mt-1 size-5 shrink-0 text-gold" />
              <div>
                <span className="eyebrow">{label}</span>
                <p className="mt-1 leading-relaxed">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="text-3xl">Send us a message</h2>
          {sent ? (
            <div className="mt-6 rounded-2xl border border-border surface-gradient p-6">
              <h3 className="text-2xl">Thank you, {sent}!</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your message is on its way to our counter. We usually reply within a few hours —
                and there's a warm croissant waiting when you visit.
              </p>
              <Button className="mt-5 rounded-full px-6" onClick={() => setSent(null)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your order or occasion"
                />
              </div>
              <Button type="submit" size="lg" className="rounded-full px-7">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>

      <section className="overflow-hidden rounded-[2rem] border border-border">
        <div className="relative h-80 surface-gradient">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="absolute left-1/2 top-1/2 w-[min(90%,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
            <MapPin className="mx-auto size-6 text-gold" />
            <h2 className="mt-3 text-2xl">Marigold Lane, Indiranagar</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Two minutes from the 100 Ft Road junction, next to the flower market. Street parking
              available before 11 AM.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
