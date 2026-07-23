import Link from "next/link";

import { siteContent } from "@/data/site";
import { SiteFooter } from "@/components/site-footer";

export default function ExperiencePage() {
  const { experience } = siteContent;

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-10 sm:px-10 lg:px-12">
      <section className="py-16 sm:py-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-md text-(--muted-strong) tracking-wide"
        >
          <Link className="transition hover:text-foreground" href="/">
            Home
          </Link>
          <span aria-hidden="true" className="text-(--muted-strong)">
            &gt;
          </span>
          <span aria-current="page" className="text-(--muted)">
            Experience
          </span>
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.06em] text-foreground sm:text-6xl">
          Experience.
        </h1>
        <div className="mt-12 grid gap-5">
          {experience.map((item) => (
            <article
              key={item.role}
              className="border-t border-(--border) pt-5 first:border-t-0 first:pt-0"
            >
              <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr] sm:gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-(--muted-strong)">
                    {item.period}
                  </p>
                  <h2 className="mt-2 text-2xl font-medium text-foreground">
                    {item.company}
                  </h2>
                  <p className="text-sm text-(--muted)">{item.role}</p>
                </div>
                <p className="text-base leading-7 text-(--muted)">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
