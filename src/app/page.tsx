import { siteContent } from "@/data/site";
import { AnimatedGraphBackground } from "@/components/animated-graph-background";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  const { about } = siteContent;

  return (
    <main className="relative isolate mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-10 sm:px-10 lg:px-12">
      <AnimatedGraphBackground />
      {/* <header className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-black/55">
        <span>Personal website</span>
        <nav className="flex items-center gap-4 tracking-normal normal-case text-black/75">
          <a className="transition hover:text-black" href="/projects">
            Projects
          </a>
          <a className="transition hover:text-black" href="/experience">
            Experience
          </a>
        </nav>
      </header> */}

      <section className="flex flex-1 items-start py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-medium leading-none tracking-[-0.06em] text-black sm:text-7xl lg:text-8xl">
              {about.name}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-black/70 sm:text-xl sm:leading-9">
              {about.summary}
            </p>
          </div>

          <div className="space-y-3 border-black/10 pt-3">
            <p className="text-xs uppercase tracking-[0.3em] text-black/45">
              About me
            </p>
            <ul className="space-y-2 text-base leading-7 text-black/72 sm:text-lg">
              {about.facts.map((fact) => (
                <li key={fact}>• {fact}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {about.links.map((link) => (
              <a
                key={link.label}
                className="rounded-md border border-black px-4 py-2 text-sm text-black transition hover:bg-black hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
