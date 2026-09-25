import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-border surface-gradient">
      <div className="grid items-center gap-8 p-8 md:p-12 lg:grid-cols-2">
        <div className="space-y-4">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-4xl leading-tight md:text-5xl">{title}</h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          {children}
        </div>
        {image ? (
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}
