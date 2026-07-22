import Link from "next/link";

import { siteContent } from "@/data/site";
import { SiteFooter } from "@/components/site-footer";

export default function ProjectsPage() {
  const { projects } = siteContent;

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-10 sm:px-10 lg:px-12">
      <header className="flex items-center justify-between border-b border-black/15 pb-5 text-sm uppercase tracking-[0.3em] text-black/55">
        <Link className="transition hover:text-black" href="/">
          Your Name
        </Link>
        <nav className="flex items-center gap-4 tracking-normal normal-case text-black/75">
          <Link className="transition hover:text-black" href="/experience">
            Experience
          </Link>
          <Link className="transition hover:text-black" href="/">
            Home
          </Link>
        </nav>
      </header>

      <section className="py-16 sm:py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-black/45">
          Projects
        </p>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.06em] text-black sm:text-6xl">
          Selected work.
        </h1>
        <div className="mt-12 grid gap-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="border-t border-black/10 pt-5 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/45">
                    {project.type}
                  </p>
                  <h2 className="text-2xl font-medium text-black">
                    {project.name}
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-black/72">
                    {project.summary}
                  </p>
                </div>
                <a
                  className="text-sm text-black underline decoration-black/25 underline-offset-4"
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
