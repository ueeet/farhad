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
        .from(".hero-side > *", { y: 20, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.6")
        .from(".hero-title-farhad", { yPercent: -110, duration: 1.3 }, "-=0.7")
        .from(".hero-photo-wrap", { scale: 1.12, opacity: 0, duration: 1.6 }, "-=1.0")
        .from(".hero-title-ivanov", { yPercent: 110, duration: 1.3 }, "-=1.2")
        .from(".hero-bottom > *", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.9");

      const photo = photoRef.current;
      if (!photo) return;

      gsap.to(photo, {
        y: 40,
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
        const dx = (e.clientX / vw - 0.5) * 20;
        const dy = (e.clientY / vh - 0.5) * 14;
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
        <div className="pointer-events-none absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 text-[10px] uppercase text-text-muted hero-side z-[3]">
          <div className="hero-mark">
            <div className="text-text/60">N° 01</div>
            <div className="mt-1 text-text-muted/70">Portrait</div>
          </div>
          <div className="w-px h-24 bg-line" />
          <div className="hero-mark">
            <div className="text-text/60">2026</div>
            <div className="mt-1 text-text-muted/70">Cover</div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-end gap-8 text-[10px] uppercase text-text-muted hero-side z-[3]">
          <div className="hero-mark text-right">
            <div className="text-text/60">ISO 400</div>
            <div className="mt-1 text-text-muted/70">35 mm</div>
          </div>
          <div className="w-px h-24 bg-line ml-auto" />
          <div className="hero-mark text-right">
            <div className="text-text/60">Host</div>
            <div className="mt-1 text-text-muted/70">Фархад · Иванов</div>
          </div>
        </div>

        <div className="relative w-full h-[min(78vh,820px)] flex items-center justify-center">
          <h1 className="sr-only">Фархад Иванов</h1>

          <div
            aria-hidden
            className="absolute inset-x-0 top-[4%] lg:top-[6%] z-[1] overflow-hidden pointer-events-none"
          >
            <span className="hero-title-farhad block font-display font-black leading-[0.82] tracking-[-0.05em] text-text text-[clamp(3.5rem,13vw,14rem)] text-left pl-[3%] pr-[2%]">
              ФАРХАД
            </span>
          </div>

          <div
            ref={photoRef}
            className="hero-photo-wrap photo-frame relative z-[2] w-[min(68vw,940px)] aspect-[16/9] rounded-sm overflow-hidden will-change-transform"
          >
            <div className="hero-photo-glow" aria-hidden />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.png"
              alt="Фархад Иванов — ведущий мероприятий"
              className="absolute inset-0 w-full h-full object-cover z-[1]"
              loading="eager"
              draggable={false}
            />
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-text z-[5] mix-blend-difference">
              <span>ФИ / 01</span>
              <span className="tabular">01 — 04</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-text z-[5] mix-blend-difference">
              <span>Выдержка</span>
              <span className="tabular">1 / 200</span>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-[4%] lg:bottom-[6%] z-[3] overflow-hidden pointer-events-none"
          >
            <span className="hero-title-ivanov block font-display font-black italic leading-[0.82] tracking-[-0.05em] text-text-muted text-[clamp(3.5rem,13vw,14rem)] text-right pr-[3%] pl-[2%]">
              иванов
            </span>
          </div>
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
