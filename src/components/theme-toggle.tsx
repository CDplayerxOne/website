"use client";

import { useSyncExternalStore } from "react";

type ThemeMode = "light" | "dark";
const THEME_CHANGE_EVENT = "themechange";

function applyFavicon(theme: ThemeMode) {
  const favicon = document.getElementById(
    "theme-favicon",
  ) as HTMLLinkElement | null;

  if (favicon) {
    favicon.href = theme === "dark" ? "/icon-dark.svg" : "/icon-light.svg";
  }
}

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): ThemeMode {
  if (typeof document !== "undefined") {
    const theme = document.documentElement.dataset.theme;

    if (theme === "light" || theme === "dark") {
      return theme;
    }
  }

  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return getSystemTheme();
  }

  return "light";
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
  applyFavicon(theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);

      return () =>
        window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
    },
    () => {
      const currentTheme = document.documentElement.dataset.theme;

      return currentTheme === "light" || currentTheme === "dark"
        ? currentTheme
        : getInitialTheme();
    },
    () => "light",
  );

  return (
    <button
      type="button"
      suppressHydrationWarning
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      aria-pressed={theme === "dark"}
      onClick={() => {
        const updatedTheme = theme === "dark" ? "light" : "dark";
        applyTheme(updatedTheme);
      }}
      className="fixed right-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-(--toggle-border) bg-(--toggle-background) px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-(--toggle-foreground) shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition hover:border-(--toggle-hover) hover:bg-(--toggle-hover) hover:text-(--toggle-hover-foreground)"
    >
      <span aria-hidden="true">{theme === "dark" ? "☾" : "☼"}</span>
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
