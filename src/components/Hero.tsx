"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".hero-meta-top > *", { y: 20, opacity: 0, duration: 0.9, stagger: 0.08 })
        .from(".hero-title-farhad", { yPercent: -110, duration: 1.3 }, "-=0.6")
        .from(".hero-person", { scale: 1.06, opacity: 0, duration: 1.6, transformOrigin: "center bottom" }, "-=1.0")
        .from(".hero-title-ivanov", { yPercent: 110, duration: 1.3 }, "-=1.2")
        .from(".hero-bottom > *", { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.9");

      const bg = bgRef.current;
      const person = personRef.current;
      if (!bg || !person) return;

      gsap.to(bg, {
        y: 30,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(person, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      const px = gsap.quickTo(person, "x", { duration: 1.1, ease: "expo.out" });
      const bx = gsap.quickTo(bg, "x", { duration: 1.4, ease: "expo.out" });

      const onMouseMove = (e: MouseEvent) => {
        const vw = window.innerWidth;
        const dx = (e.clientX / vw - 0.5) * 18;
        px(dx);
        bx(dx * -0.4);
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
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 lg:pt-28 pb-10 overflow-hidden hero-bg-gradient bg-noise isolate"
    >
      <div
        ref={bgRef}
        className="hero-bg-photo"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.png"
          alt=""
          loading="eager"
          draggable={false}
        />
      </div>

      <div className="relative z-[10] mx-auto w-full max-w-[1600px] px-6 lg:px-12 hero-meta-top flex items-start justify-between gap-6 text-[11px] uppercase tracking-[0.3em] text-text-muted">
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

      <div className="relative z-[10] mx-auto w-full max-w-[1600px] px-6 lg:px-12 flex items-center justify-center">
        <div className="relative w-full h-[min(82vh,880px)] flex items-center justify-center">
          <h1 className="sr-only">Фархад Иванов</h1>

          <div
            aria-hidden
            className="absolute inset-x-0 top-[2%] lg:top-[4%] overflow-hidden pointer-events-none"
          >
            <span className="hero-title-farhad block font-display font-black leading-[0.82] tracking-[-0.05em] text-text text-[clamp(4rem,15vw,17rem)] text-left pl-[2%] pr-[2%]">
              ФАРХАД
            </span>
          </div>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-[2%] lg:bottom-[4%] overflow-hidden pointer-events-none"
          >
            <span className="hero-title-ivanov block font-display font-black italic leading-[0.82] tracking-[-0.05em] text-text text-[clamp(4rem,15vw,17rem)] text-right pr-[2%] pl-[2%]">
              иванов
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-[10] mx-auto w-full max-w-[1600px] px-6 lg:px-12 hero-bottom flex flex-col lg:flex-row lg:items-end justify-between gap-8">
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

      <div className="absolute z-[10] bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-text-muted">
        <span>скролл</span>
        <span className="block w-px h-8 bg-text-muted/40 animate-pulse" />
      </div>
    </section>
  );
}
