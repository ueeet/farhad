"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const roleWords = ["свадеб", "корпоративов", "ТВ-эфиров", "премий", "спецпроектов"];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);
  const farhadRef = useRef<HTMLSpanElement>(null);
  const ivanovRef = useRef<HTMLSpanElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roleWords.length);
    }, 1900);
    return () => clearInterval(id);
  }, []);

  useGSAP(
    () => {
      const bg = bgRef.current;
      const person = personRef.current;
      const farhad = farhadRef.current;
      const ivanov = ivanovRef.current;
      if (!bg || !person || !farhad || !ivanov) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".hero-meta-top > *", { y: 20, duration: 0.8, stagger: 0.1 })
        .from(farhad, { xPercent: -120, duration: 1.4 }, "-=0.2")
        .from(ivanov, { xPercent: 120, duration: 1.4 }, "<")
        .from(person, { yPercent: 30, duration: 1.4, transformOrigin: "center bottom" }, "-=1.2")
        .from(".hero-bottom > *", { y: 40, duration: 0.9, stagger: 0.1 }, "-=0.8");

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

      gsap.to(farhad, {
        xPercent: -130,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(ivanov, {
        xPercent: 130,
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
      const fx = gsap.quickTo(farhad, "x", { duration: 1.2, ease: "expo.out" });
      const fy = gsap.quickTo(farhad, "y", { duration: 1.2, ease: "expo.out" });
      const ix = gsap.quickTo(ivanov, "x", { duration: 1.2, ease: "expo.out" });
      const iy = gsap.quickTo(ivanov, "y", { duration: 1.2, ease: "expo.out" });

      const onMouseMove = (e: MouseEvent) => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const rx = e.clientX / vw - 0.5;
        const ry = e.clientY / vh - 0.5;

        px(rx * 18);
        bx(rx * -7);
        fx(rx * -14);
        fy(ry * -8);
        ix(rx * 16);
        iy(ry * 9);
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
        <div className="flex items-baseline gap-2">
          <span>Ведущий</span>
          <span className="relative inline-flex overflow-hidden leading-none h-[1em] items-end">
            <span
              key={roleIdx}
              className="role-rotator inline-block leading-none text-text"
            >
              {roleWords[roleIdx]}
            </span>
          </span>
        </div>
        <div className="text-right">
          Казань<span className="hidden sm:inline"> · </span>
          <br className="sm:hidden" />
          Набережные Челны
        </div>
      </div>

      <h1 className="sr-only">Фархад Иванов</h1>

      <div
        aria-hidden
        className="absolute inset-x-0 top-[13%] lg:top-[14%] z-[1] overflow-hidden pointer-events-none"
      >
        <span ref={farhadRef} className="hero-title-farhad block font-display font-black leading-[0.82] tracking-[-0.05em] text-text text-[clamp(3.6rem,13.5vw,15.3rem)] text-left pl-[0.5%]">
          ФАРХАД
        </span>
      </div>

      <div ref={personRef} className="hero-person z-[2]" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-person.png"
          alt=""
          loading="eager"
          draggable={false}
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-[18%] lg:bottom-[20%] z-[3] overflow-hidden pointer-events-none"
      >
        <span ref={ivanovRef} className="hero-title-ivanov block font-display font-black italic leading-[0.82] tracking-[-0.05em] text-text text-[clamp(3.6rem,13.5vw,15.3rem)] text-right pr-[0.5%]">
          ИВАНОВ
        </span>
      </div>

      <div className="flex-1" />

      <div className="relative z-[10] mx-auto w-full max-w-[1600px] px-6 lg:px-12 pb-4 lg:pb-6 hero-bottom flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <a
          href="#calc"
          className="inline-flex items-center gap-4 px-5 py-3 rounded-full border border-text/30 backdrop-blur-sm bg-bg/30 hover:border-text hover:bg-bg/50 transition-all duration-300 group w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-text">Обсудить дату</span>
          <span className="w-6 h-6 rounded-full border border-text/40 flex items-center justify-center group-hover:rotate-45 group-hover:border-text transition-all">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </span>
        </a>

        <div className="flex items-end gap-x-6 lg:gap-x-10 text-[10px] lg:text-[11px] text-text-muted uppercase tracking-[0.18em]">
          <div>
            <div className="font-display font-black text-xl lg:text-2xl text-text tabular tracking-tight leading-none">500+</div>
            <div className="mt-1">мероприятий</div>
          </div>
          <div className="w-px h-8 bg-line self-center" />
          <div>
            <div className="font-display font-black text-xl lg:text-2xl text-text tabular tracking-tight leading-none">13.7K</div>
            <div className="mt-1">подписчиков</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-line self-center" />
          <div className="hidden sm:block">
            <div className="font-display font-black text-xl lg:text-2xl text-text tracking-tight leading-none">Первый</div>
            <div className="mt-1">канал · Школа</div>
          </div>
        </div>
      </div>
    </section>
  );
}
