"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : getSystemTheme();

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const resolvedTheme: ThemeMode = theme ?? "light";

  return (
    <button
      type="button"
      aria-label={
        resolvedTheme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={resolvedTheme === "dark"}
      onClick={() => {
        const updatedTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
      }}
      className="fixed right-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-(--toggle-border) bg-(--toggle-background) px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-(--toggle-foreground) shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:border-(--toggle-hover) hover:bg-(--toggle-hover) hover:text-(--toggle-hover-foreground)"
    >
      <span aria-hidden="true">{resolvedTheme === "dark" ? "☾" : "☼"}</span>
      <span>{resolvedTheme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
