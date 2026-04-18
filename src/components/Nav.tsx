"use client";

import { useEffect, useState } from "react";

const leftLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#showreel", label: "Шоурил" },
  { href: "#gallery", label: "Работы" },
];

const rightLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#calc", label: "Смета" },
  { href: "#faq", label: "FAQ" },
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
          ? "bg-bg/70 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <nav className="hidden lg:flex items-center gap-8 flex-1">
          {leftLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-text-muted hover:text-text transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="font-display font-black text-xl tracking-[-0.04em] lg:flex-none"
          aria-label="В начало"
        >
          FI
        </a>

        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          {rightLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-text-muted hover:text-text transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/79600714686"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-text hover:text-text-muted transition-colors duration-300 inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-text animate-pulse" />
            Связаться
          </a>
        </nav>

        <button
          aria-label="Меню"
          className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-px bg-text transition-transform duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-text transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-text transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] border-t border-line" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6 bg-bg-soft">
          {[...leftLinks, ...rightLinks].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-text-muted hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/79600714686"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 py-3 text-sm text-text inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-text animate-pulse" />
            Написать в WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
