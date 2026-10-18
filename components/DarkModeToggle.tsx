"use client";

import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    // Enable the color fade only after the first user toggle, so it never plays on page load.
    document.documentElement.classList.add("theme-transition");
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Icons are swapped with CSS (dark: variants) instead of JS state, so the server-rendered
  // markup already matches the theme set by next-themes and nothing pops in after hydration.
  return (
    <button
      onClick={toggle}
      className="w-8 h-8 flex items-center justify-center rounded-full transition-opacity opacity-70 hover:opacity-100 dark:text-white dark:opacity-90 dark:hover:opacity-100"
      aria-label="Toggle dark mode"
    >
      {/* Sun icon */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="hidden dark:block w-5 h-5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      {/* Moon icon */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="block dark:hidden w-5 h-5">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
