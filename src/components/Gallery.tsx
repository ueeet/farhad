"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { tag: "Свадьба", title: "Камерная свадьба", h: "tall" },
  { tag: "ТВ", title: "Прямой эфир", h: "short" },
  { tag: "Корпоратив", title: "Премия года", h: "tall" },
  { tag: "Шоу", title: "Кама Лемпт", h: "short" },
  { tag: "Свадьба", title: "Хилл Резорт", h: "tall" },
  { tag: "Корпоратив", title: "Открытие сезона", h: "short" },
  { tag: "ТВ", title: "Школа Первого канала", h: "short" },
  { tag: "Спецпроект", title: "Прожарка", h: "tall" },
];

export function Gallery() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".gal-item", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="gallery"
      className="relative py-32 lg:py-40 border-t border-line"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              / 04 — Работы
            </div>
            <h2 className="font-display font-black text-5xl lg:text-7xl leading-[0.9] tracking-tight">
              <span className="text-gradient-gold italic">Кадры</span> с площадки
            </h2>
          </div>
          <a
            href="https://www.instagram.com/farhad_ivanov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            Смотреть всё в Инстаграме
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <a
              key={i}
              href="https://www.instagram.com/farhad_ivanov/"
              target="_blank"
              rel="noopener noreferrer"
              className={`gal-item group relative overflow-hidden rounded-2xl placeholder-card ${
                it.h === "tall" ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-text-muted text-[10px] uppercase tracking-widest opacity-50">
                фото {String(i + 1).padStart(2, "0")}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {it.tag}
              </div>

              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="font-display font-bold text-sm">{it.title}</div>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full border border-line bg-bg/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
