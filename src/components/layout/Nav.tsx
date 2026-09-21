"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/profile";

/**
 * Brutal masthead. A 2px ink rule pins the top of the page; the identity is
 * a black box with knocked-out paper type, and the section links are a mono
 * printed index. On mobile the links collapse into a labelled menu button
 * that reads "MENU", not a bare hamburger (layoutmobile).
 *
 * The marquee band carries the border-bottom: this header only sits on the
 * paper, so the page's first rule is the masthead underline when scrolled.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu, and allow Escape to close it (R-26 / R-32 keyboard use).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_0_0_var(--ink)]" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-brutal flex h-16 items-center justify-between"
      >
        {/* Identity block: ink box with knocked-out paper type, always home */}
        <a
          href="/"
          className="bg-ink px-3 py-2 font-display text-base uppercase tracking-tight text-paper shadow-lift bs"
        >
          {profile.firstName}
        </a>

        {/* Desktop: printed mono index */}
        <ul className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-meta text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: labelled menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 min-w-11 items-center justify-center gap-2 border-2 border-ink px-3 font-meta text-ink shadow-lift bs md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu panel: black ink well, paper type */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t-2 border-ink bg-ink text-paper md:hidden"
        >
          <ul className="container-brutal flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b-2 border-paper/20 py-4 font-display text-xl uppercase tracking-tight text-paper transition-colors hover:text-zap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
