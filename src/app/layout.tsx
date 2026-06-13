import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/i18n/context";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroller } from "@/components/SmoothScroller";
import "./globals.css";

const inter = Inter({
  variable: "--font-cosmica",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Paginita — Software Development & Automation",
  description:
    "We build software, automate processes, and connect your tools so you can focus on what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          <SmoothScroller />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
