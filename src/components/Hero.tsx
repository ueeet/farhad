"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".hero-meta-top > *", { y: 20, opacity: 0, duration: 0.9, stagger: 0.08 })
        .from(".hero-title-line", { yPercent: 110, duration: 1.3, stagger: 0.14 }, "-=0.5")
        .from(".hero-photo-wrap", { scale: 1.12, opacity: 0, duration: 1.6 }, 0.2)
        .from(".hero-bottom > *", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.9");

      const photo = photoRef.current;
      if (!photo) return;

      gsap.to(photo, {
        rotation: -4,
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      const qx = gsap.quickTo(photo, "x", { duration: 1.1, ease: "expo.out" });
      const qy = gsap.quickTo(photo, "y", { duration: 1.1, ease: "expo.out" });

      const onMouseMove = (e: MouseEvent) => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const dx = (e.clientX / vw - 0.5) * 30;
        const dy = (e.clientY / vh - 0.5) * 20;
        qx(dx);
        qy(dy);
      };
      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 lg:pt-28 pb-10 overflow-hidden hero-bg-gradient bg-noise"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 hero-meta-top flex items-start justify-between gap-6 text-[11px] uppercase tracking-[0.3em] text-text-muted">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-text-muted" />
          Ведущий мероприятий
        </div>
        <div className="text-right">
          Казань<span className="hidden sm:inline"> · </span>
          <br className="sm:hidden" />
          Набережные Челны
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 lg:px-12 flex items-center justify-center">
        <div className="relative w-full">
          <div className="relative mx-auto w-[clamp(220px,30vw,440px)] aspect-[3/4] idle-breath">
            <div
              ref={photoRef}
              className="hero-photo-wrap photo-frame absolute inset-0 rounded-sm overflow-hidden placeholder-card will-change-transform"
            >
              <div className="absolute inset-0 flex items-center justify-center text-text-muted text-[10px] uppercase tracking-[0.3em] z-[2]">
                фото · портрет
              </div>
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-text-muted z-[2]">
                <span>ФИ / 01</span>
                <span className="tabular">01 — 04</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-text-muted z-[2]">
                <span>Выдержка</span>
                <span className="tabular">1 / 200</span>
              </div>
            </div>
          </div>

          <h1
            aria-label="Фархад Иванов"
            className="pointer-events-none absolute inset-0 flex flex-col justify-center items-center font-display font-black leading-[0.84] tracking-[-0.06em] text-center text-text"
          >
            <span className="block overflow-hidden w-full">
              <span className="hero-title-line block text-[clamp(3.5rem,14vw,14rem)]">
                ФАРХАД
              </span>
            </span>
            <span className="block overflow-hidden w-full">
              <span className="hero-title-line block italic text-[clamp(3.5rem,14vw,14rem)] text-text-muted">
                иванов
              </span>
            </span>
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 hero-bottom flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="flex flex-wrap items-center gap-3">
          <a href="#calc" className="btn-arrow">
            <span className="btn-arrow-label">Рассчитать вечер</span>
            <span className="btn-arrow-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a href="#gallery" className="btn-outline">
            Шоурил
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 3l14 9-14 9V3z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap items-end gap-x-10 gap-y-3 text-xs text-text-muted uppercase tracking-[0.2em]">
          <div>
            <div className="font-display text-2xl lg:text-3xl text-text tabular tracking-tight">500+</div>
            <div className="mt-1">мероприятий</div>
          </div>
          <div>
            <div className="font-display text-2xl lg:text-3xl text-text tabular tracking-tight">13.7K</div>
            <div className="mt-1">подписчиков</div>
          </div>
          <div className="hidden md:block">
            <div className="font-display text-2xl lg:text-3xl text-text tracking-tight">Первый</div>
            <div className="mt-1">канал · Школа</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-text-muted">
        <span>скролл</span>
        <span className="block w-px h-8 bg-text-muted/40 animate-pulse" />
      </div>
    </section>
  );
}
