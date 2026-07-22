import Link from "next/link";

import { siteContent } from "@/data/site";
import { SiteFooter } from "@/components/site-footer";

export default function ExperiencePage() {
  const { experience } = siteContent;

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-10 sm:px-10 lg:px-12">
      <header className="flex items-center justify-between border-b border-black/15 pb-5 text-sm uppercase tracking-[0.3em] text-black/55">
        <Link className="transition hover:text-black" href="/">
          Your Name
        </Link>
        <nav className="flex items-center gap-4 tracking-normal normal-case text-black/75">
          <Link className="transition hover:text-black" href="/projects">
            Projects
          </Link>
          <Link className="transition hover:text-black" href="/">
            Home
          </Link>
        </nav>
      </header>

      <section className="py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-black/45">
          Experience
        </p>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.06em] text-black sm:text-6xl">
          Work history.
        </h1>
        <div className="mt-12 grid gap-5">
          {experience.map((item) => (
            <article
              key={item.role}
              className="border-t border-black/10 pt-5 first:border-t-0 first:pt-0"
            >
              <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr] sm:gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-black/45">
                    {item.period}
                  </p>
                  <h2 className="mt-2 text-2xl font-medium text-black">
                    {item.company}
                  </h2>
                  <p className="text-sm text-black/65">{item.role}</p>
                </div>
                <p className="text-base leading-7 text-black/72">
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
