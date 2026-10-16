"use client";

import { useEffect } from "react";

// On first load, sweep the link highlight across every text link in reading order,
// then settle back to the resting state. Hover keeps working once each sweep ends.
export default function LinkIntro() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLElement>(".link-hl, .prose a");
    links.forEach((el, i) => {
      el.style.setProperty("--intro-delay", `${300 + i * 100}ms`);
      el.classList.add("link-intro");
      el.addEventListener("animationend", () => el.classList.remove("link-intro"), { once: true });
    });
  }, []);

  return null;
}
