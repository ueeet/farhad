"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#calc", label: "Калькулятор" },
  { href: "#gallery", label: "Работы" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          Ф<span className="text-gold">.</span>И
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted hover:text-text transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/79600714686"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 btn-gold px-5 py-2.5 rounded-full text-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black/70" />
          WhatsApp
        </a>

        <button
          aria-label="Меню"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-px bg-text transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-text transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-text transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 border-t border-line" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6 bg-bg-soft">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-text-muted hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/79600714686"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 btn-gold px-5 py-3 rounded-full text-sm text-center"
          >
            Написать в WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
