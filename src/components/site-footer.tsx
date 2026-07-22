import { siteContent } from "@/data/site";

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M12 2C6.48 2 2 6.59 2 12.27c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-1.02-.01-1.84-2.78.63-3.37-1.2-3.37-1.2-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62.99.07 1.51 1.04 1.51 1.04.88 1.55 2.31 1.1 2.87.84.09-.65.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.1 9.1 0 0 1 12 6.81c.85 0 1.71.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.96-2.34 4.83-4.57 5.08.36.32.67.96.67 1.94 0 1.4-.01 2.53-.01 2.88 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.27C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current stroke-2"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current stroke-2"
    >
      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4V8h4v2a4 4 0 0 1 2-2Z" />
      <path d="M2 9h4v11H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function SiteFooter() {
  const { contact, footer } = siteContent;

  return (
    <footer className="flex flex-col gap-4 border-t border-[color:var(--border)] py-6 text-sm text-[color:var(--muted-strong)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5 text-[color:var(--muted)]">
        <a
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] transition hover:border-[color:var(--foreground)] hover:text-[color:var(--foreground)]"
          href={contact.links[0].href}
          aria-label="GitHub"
          title="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] transition hover:border-[color:var(--foreground)] hover:text-[color:var(--foreground)]"
          href={`mailto:${contact.email}`}
          aria-label="Email"
          title="Email"
        >
          <MailIcon />
        </a>
        <a
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] transition hover:border-[color:var(--foreground)] hover:text-[color:var(--foreground)]"
          href={contact.links[1].href}
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <LinkedinIcon />
        </a>
      </div>
      <div className="space-y-1 text-[color:var(--muted-strong)] sm:text-right">
        <p>{footer.note}</p>
        <p>{footer.credit}</p>
      </div>
    </footer>
  );
}
