"use client";

import { usePathname } from "next/navigation";

export default function CardShell({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === "/";

  return (
    <div className={`container mx-auto max-w-2xl ${isHome ? "min-h-dvh flex flex-col justify-center" : ""}`}>
      <div className={`relative mt-3 mx-3 sm:mt-4 sm:mx-5 lg:mx-0 ${isHome ? "mb-3 sm:mb-4" : "mb-12"} border border-white/60 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none backdrop-blur-xl dark:backdrop-blur-3xl p-4 sm:p-6 lg:p-8 rounded-xl bg-white/60 dark:bg-gray-950/50`}>
        {children}
      </div>
    </div>
  );
}
