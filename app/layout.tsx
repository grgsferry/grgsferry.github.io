import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Blob from "@/components/Blob";
import ThemeProvider from "@/components/ThemeProvider";
import DarkModeToggle from "@/components/DarkModeToggle";
import LinkIntro from "@/components/LinkIntro";
import CardShell from "@/components/CardShell";

export const metadata: Metadata = {
  title: "Gregorius Ferry",
  description: "Data analyst and business intelligence expert.",
  icons: { icon: "/favicon.svg" },
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ibm",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexSans.variable} suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 font-ibm transition-colors duration-200 text-gray-700 dark:text-gray-200">
        <ThemeProvider>
          <Blob />
          <LinkIntro />
          <CardShell>
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
              <DarkModeToggle />
            </div>
            {children}
          </CardShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
