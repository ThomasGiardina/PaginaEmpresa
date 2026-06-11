"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/i18n/context";
import { getLenis } from "@/lib/smoothScroll";
import Link from "next/link";

const links = [
  { key: "nav.services", href: "/#services" },
  { key: "nav.projects", href: "/proyectos" },
  { key: "nav.about", href: "/#about" },
  { key: "nav.contact", href: "/#contact" },
];

export function Nav() {
  const { t, locale, setLocale } = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScrollState, { passive: true });
    handleScrollState();

    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = links
      .filter((l) => l.href.startsWith("/#"))
      .map((l) => l.href.replace("/#", ""));

    const handleScroll = () => {
      let closest = "";
      let minDist = Infinity;
      const refTop = 100;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const dist = Math.abs(el.getBoundingClientRect().top - refTop);
        if (dist < minDist) {
          minDist = dist;
          closest = id;
        }
      }

      if (closest) setActiveSection(closest);
    };

    handleScroll();

    const lenis = getLenis();
    if (lenis) {
      lenis.on("scroll", handleScroll);
      return () => lenis.off("scroll", handleScroll);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isLanding = pathname === "/";

  return (
    <nav
      className={`z-50 bg-snow border-b border-[#e5e5e5] h-14 flex items-center transition-all duration-300 ${
        isLanding
          ? `fixed top-0 left-0 right-0 w-full ${
              scrolled
                ? "translate-y-0 opacity-100 shadow-sm"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`
          : "sticky top-0 translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[1500px] mx-auto w-full px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-obsidian flex items-center justify-center flex-shrink-0 text-white">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 2.5L13.5 13.5M13.5 2.5L2.5 13.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[15px] font-bold tracking-tight text-obsidian uppercase">
            Paginita
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isProjects = link.href === "/proyectos";
            const isSection = link.href.startsWith("/#");
            const sectionId = isSection ? link.href.replace("/#", "") : "";

            let isActive = false;
            if (isProjects) {
              isActive = pathname === "/proyectos";
            } else if (isSection && isLanding) {
              isActive = activeSection === sectionId;
            }

            return (
              <Link
                key={link.key}
                href={link.href}
                className={
                  isActive
                    ? "text-[14px] font-medium bg-obsidian text-snow rounded-[100px] px-3 py-1"
                    : "text-[14px] font-medium text-ink hover:text-obsidian transition-colors"
                }
              >
                {t(link.key)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            className="text-[13px] font-medium text-graphite hover:text-obsidian transition-colors px-2 cursor-pointer"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center bg-[#111] text-white rounded-full px-5 py-2.5 text-[14px] font-medium leading-none hover:opacity-90 transition-opacity gap-2"
          >
            {t("nav.talk")}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
              <path d="M2.5 6h7M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button
            className="md:hidden flex flex-col gap-1 p-1 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-obsidian transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-obsidian transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-obsidian transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-14 left-0 right-0 bg-snow border-b border-fog md:hidden">
          <div className="flex flex-col px-6 py-4 gap-3">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[14px] font-medium text-ink hover:text-obsidian py-1.5"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
