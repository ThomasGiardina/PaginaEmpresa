"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/i18n/context";
import { getLenis } from "@/lib/smoothScroll";
import Link from "next/link";

const links = [
  { key: "nav.services", href: "/#services" },
  { key: "nav.about", href: "/#about" },
  { key: "nav.contact", href: "/#contact" },
  { key: "nav.projects", href: "/proyectos" },
];

export function Nav() {
  const { t, locale, setLocale } = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
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
      className={`z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/10 h-14 flex items-center transition-all duration-300 shadow-sm ${
        isLanding
          ? "fixed top-0 left-0 right-0 w-full translate-y-0 opacity-100"
          : "sticky top-0 translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[1500px] mx-auto w-full px-22 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-snow/10 flex items-center justify-center flex-shrink-0 text-white">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 2.5L13.5 13.5M13.5 2.5L2.5 13.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[17px] font-bold tracking-tight text-snow uppercase">
            Paginita
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
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
                    ? "text-[14px] font-medium bg-snow/10 text-snow rounded-[100px] px-4 py-1.5 uppercase tracking-[0.1em]"
                    : "text-[14px] font-medium text-slate hover:text-snow transition-colors uppercase tracking-[0.1em]"
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
            className="text-[15px] font-medium text-slate hover:text-snow transition-colors px-2 cursor-pointer"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>


          <button
            className="md:hidden flex flex-col gap-1 p-1 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-snow transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-snow transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-snow transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-14 left-0 right-0 bg-obsidian border-b border-white/10 md:hidden">
          <div className="flex flex-col px-6 py-4 gap-3">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[16px] font-medium text-slate hover:text-snow py-1.5 uppercase tracking-wide"
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
