import Link from "next/link";

import { siteContent } from "@/data/site";
import { SiteFooter } from "@/components/site-footer";

export default function ProjectsPage() {
  const { projects } = siteContent;

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
            Projects
          </span>
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.06em] text-foreground sm:text-6xl">
          Selected work.
        </h1>
        <div className="mt-12 grid gap-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="border-t border-(--border) pt-5 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-(--muted-strong)">
                    {project.type}
                  </p>
                  <h2 className="text-2xl font-medium text-foreground">
                    {project.name}
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-(--muted)">
                    {project.summary}
                  </p>
                </div>
                <a
                  className="text-sm text-foreground underline decoration-(--border-strong) underline-offset-4 transition hover:decoration-[color:var(--foreground)]"
                  href={project.href}
                >
                  View
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
