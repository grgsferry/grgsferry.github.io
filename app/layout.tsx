import type { Metadata } from "next";
import "./globals.css";
import Blob from "@/components/Blob";
import ThemeProvider from "@/components/ThemeProvider";
import DarkModeToggle from "@/components/DarkModeToggle";

export const metadata: Metadata = {
  title: "Gregorius Ferry",
  description: "Data analyst and business intelligence expert.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 font-ibm text-gray-700 dark:text-gray-300 transition-colors duration-200">
        <ThemeProvider>
          <Blob />
          <div className="container mx-auto max-w-2xl">
            <div className="mt-4 mx-5 mb-12 lg:mx-0 shadow-xl p-6 lg:p-8 rounded-xl bg-transparent">
              <div className="flex justify-end mb-2">
                <DarkModeToggle />
              </div>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
