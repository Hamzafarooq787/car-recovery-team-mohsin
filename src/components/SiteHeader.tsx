"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b border-secondary-container transition-all ${
        scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary-container"
        >
          Car Recovery Team
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-primary-container font-bold border-b-2 border-primary-container pb-1 font-body-md"
                    : "text-on-surface hover:text-primary-container transition-colors font-body-md"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+447845297881"
            className="hidden sm:inline-flex bg-primary-container text-on-primary-container px-6 py-2 font-bold hover:bg-primary-fixed-dim transition-all active:scale-95 duration-100"
          >
            Call Now
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden text-on-surface p-2 hover:text-primary-container transition-colors"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-secondary-container bg-background">
          <nav className="flex flex-col px-margin-mobile py-4 gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    active
                      ? "text-primary-container font-bold py-3 font-body-md border-l-4 border-primary-container pl-3"
                      : "text-on-surface hover:text-primary-container transition-colors py-3 font-body-md pl-3 border-l-4 border-transparent"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+447845297881"
              className="mt-3 bg-primary-container text-on-primary-container px-6 py-3 font-bold text-center hover:bg-primary-fixed-dim transition-all active:scale-95 duration-100"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
