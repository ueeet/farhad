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
  const farhadRef = useRef<HTMLSpanElement>(null);
  const ivanovRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const bg = bgRef.current;
      const person = personRef.current;
      const farhad = farhadRef.current;
      const ivanov = ivanovRef.current;
      if (!bg || !person || !farhad || !ivanov) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".hero-meta-top > *", { y: 20, opacity: 0, duration: 0.9, stagger: 0.08 })
        .from(farhad, { yPercent: -110, duration: 1.3 }, "-=0.6")
        .from(person, { scale: 1.06, opacity: 0, duration: 1.6, transformOrigin: "center bottom" }, "-=1.0")
        .from(ivanov, { yPercent: 110, duration: 1.3 }, "-=1.2");

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

      <div className="relative z-[10] mx-auto w-full max-w-[1600px] px-6 lg:px-12 hero-meta-top flex items-center justify-between gap-6">
        <div className="flex items-center gap-4 font-display font-black uppercase tracking-[-0.02em] text-text text-[clamp(1rem,1.9vw,1.75rem)] leading-none">
          <span className="hidden sm:block w-10 lg:w-16 h-px bg-text-muted" />
          Ведущий мероприятий
        </div>
        <div className="text-right text-[11px] uppercase tracking-[0.3em] text-text-muted">
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
        className="absolute inset-x-0 bottom-[5%] lg:bottom-[6%] z-[3] overflow-hidden pointer-events-none"
      >
        <span ref={ivanovRef} className="hero-title-ivanov block font-display font-black italic leading-[0.82] tracking-[-0.05em] text-text text-[clamp(3.6rem,13.5vw,15.3rem)] text-right pr-[0.5%]">
          ИВАНОВ
        </span>
      </div>

      <div className="flex-1" />
    </section>
  );
}
