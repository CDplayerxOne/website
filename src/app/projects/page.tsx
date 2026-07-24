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
              className="group rounded-2xl border border-(--border) bg-paper p-6 shadow-[0_1px_0_rgba(17,17,17,0.02),0_12px_30px_rgba(17,17,17,0.06)] transition duration-300 ease-out motion-safe:transform-gpu motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.012] hover:border-(--border-strong) hover:shadow-[0_18px_42px_rgba(17,17,17,0.1)] motion-reduce:transition-none"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium text-foreground transition duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5">
                    {project.name}
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-(--muted)">
                    {project.summary}
                  </p>
                </div>
                <a
                  className="text-sm text-foreground underline decoration-(--border-strong) underline-offset-4 transition duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:decoration-foreground"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex">
          <a
            className="inline-flex w-fit items-center rounded-md border border-foreground px-4 py-2 text-sm text-foreground transition hover:bg-foreground hover:text-background"
            href="https://github.com/CDplayerxOne?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all projects
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
