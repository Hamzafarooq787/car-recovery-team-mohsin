"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b border-secondary-container ${
        scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto">
        <div className="font-headline-lg text-headline-lg font-bold text-primary-container">
          Car Recovery Team
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            className="text-on-surface hover:text-primary-container transition-colors font-body-md"
            href="/"
          >
            Home
          </Link>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-body-md"
            href="/services"
          >
            Services
          </a>
          <a
            className="text-primary-container font-bold border-b-2 border-primary-container pb-1 font-body-md"
            href="/about"
          >
            About Us
          </a>
          <a
            className="text-on-surface hover:text-primary-container transition-colors font-body-md"
            href="/contact"
          >
            Contact Us
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-on-surface-variant text-[12px] font-label-md">
              24/7 EMERGENCY LINE
            </span>
            <span className="text-primary-container font-bold font-body-md">
              +44 7856 978630
            </span>
          </div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 font-bold hover:bg-primary-fixed-dim transition-all active:scale-95 duration-100">
            Call Now
          </button>
        </div>
      </div>
    </header>
  );
}
