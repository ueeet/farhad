"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 })
        .from(
          ".hero-title-line",
          { y: 80, opacity: 0, duration: 1, stagger: 0.12 },
          "-=0.5"
        )
        .from(
          ".hero-meta > *",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 },
          "-=0.7"
        )
        .from(".hero-photo", { scale: 1.1, opacity: 0, duration: 1.2 }, 0)
        .from(
          ".hero-cta > *",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.8"
        );

    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-[100svh] pt-24 lg:pt-28 pb-24 overflow-hidden bg-noise"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-gold-deep/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="hero-eyebrow flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-text-muted mb-8">
          <span className="w-8 h-px bg-gold" />
          Ведущий · Казань · Набережные Челны
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-9">
            <h1 className="font-display font-black leading-[0.9] tracking-[-0.05em] text-[clamp(2.5rem,8.5vw,9rem)]">
              <span className="hero-title-line block">ФАРХАД</span>
              <span className="hero-title-line block text-gradient-gold italic" style={{ fontFamily: "var(--font-unbounded)" }}>
                ИВАНОВ
              </span>
            </h1>

            <div className="hero-meta mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Открыт к новым датам
              </span>
              <span className="opacity-40">·</span>
              <span>5+ лет на сцене</span>
              <span className="opacity-40">·</span>
              <span>500+ мероприятий</span>
              <span className="opacity-40">·</span>
              <span>Школа Первого канала</span>
            </div>

            <div className="hero-cta mt-12 flex flex-wrap gap-4">
              <a
                href="#calc"
                className="btn-gold px-7 py-4 rounded-full text-sm inline-flex items-center gap-2"
              >
                Рассчитать стоимость
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#gallery"
                className="btn-ghost px-7 py-4 rounded-full text-sm inline-flex items-center gap-2"
              >
                Посмотреть шоурил
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="hero-photo relative aspect-[3/4] rounded-3xl overflow-hidden placeholder-card gold-glow float-anim">
              <div className="absolute inset-0 flex items-center justify-center text-text-muted text-xs uppercase tracking-widest">
                фото в смокинге
              </div>
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-text-muted">портрет · 2026</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">ФИ / 01</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs text-text-muted">Премиум-вечера</div>
                <div className="font-display text-xl mt-1">Ведущий и спикер</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
