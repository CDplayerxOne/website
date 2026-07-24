import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { ThemeToggle } from "../components/theme-toggle";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const body = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corey Dai",
  description: "A minimal black and white personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          id="theme-favicon"
          rel="icon"
          type="image/svg+xml"
          href="/icon-light.svg"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const storedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = storedTheme === 'light' || storedTheme === 'dark'
                ? storedTheme
                : prefersDark
                  ? 'dark'
                  : 'light';

              document.documentElement.dataset.theme = theme;
              document.documentElement.style.colorScheme = theme;

              const favicon = document.getElementById('theme-favicon');
              if (favicon) {
                favicon.href = theme === 'dark' ? '/icon-dark.svg' : '/icon-light.svg';
              }
            } catch (error) {
              document.documentElement.dataset.theme = 'light';
              document.documentElement.style.colorScheme = 'light';

              const favicon = document.getElementById('theme-favicon');
              if (favicon) {
                favicon.href = '/icon-light.svg';
              }
            }
          })();`}
        </Script>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
