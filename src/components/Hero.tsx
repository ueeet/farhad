"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useSpotlight } from "./Spotlight";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const onMove = useSpotlight();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 })
        .from(
          ".hero-title-line",
          { yPercent: 110, duration: 1.1, stagger: 0.14, ease: "expo.out" },
          "-=0.5"
        )
        .from(
          ".hero-meta > *",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 },
          "-=0.7"
        )
        .from(".hero-photo", { scale: 1.08, opacity: 0, duration: 1.4, ease: "expo.out" }, 0)
        .from(
          ".hero-cta > *",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.8"
        );

      const photo = photoRef.current;
      if (!photo) return;

      const qx = gsap.quickTo(photo, "x", { duration: 0.9, ease: "expo.out" });
      const qy = gsap.quickTo(photo, "y", { duration: 0.9, ease: "expo.out" });
      const qrx = gsap.quickTo(photo, "rotateY", { duration: 0.9, ease: "expo.out" });
      const qry = gsap.quickTo(photo, "rotateX", { duration: 0.9, ease: "expo.out" });

      const onMouseMove = (e: MouseEvent) => {
        const rect = photo.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        qx(dx * 18);
        qy(dy * 18);
        qrx(dx * 6);
        qry(-dy * 6);
      };
      const onLeave = () => {
        qx(0); qy(0); qrx(0); qry(0);
      };
      const parent = photo.parentElement;
      parent?.addEventListener("mousemove", onMouseMove);
      parent?.addEventListener("mouseleave", onLeave);
      return () => {
        parent?.removeEventListener("mousemove", onMouseMove);
        parent?.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-24 lg:pt-28 pb-16 overflow-hidden bg-noise"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-gold-deep/15 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <div className="hero-eyebrow flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-text-muted mb-10">
          <span className="w-8 h-px bg-gold" />
          Ведущий · Казань · Набережные Челны
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 min-w-0">
            <h1 className="font-display font-black leading-[0.9] tracking-[-0.06em] text-[clamp(2.25rem,6vw,6.5rem)] balance">
              <span className="block overflow-hidden">
                <span className="hero-title-line block">ФАРХАД</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-title-line block text-gradient-gold italic" style={{ fontFamily: "var(--font-unbounded)" }}>
                  ИВАНОВ
                </span>
              </span>
            </h1>

            <div className="hero-meta mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Открыт к новым датам
              </span>
              <span className="opacity-40">·</span>
              <span className="tabular">5+ лет на сцене</span>
              <span className="opacity-40">·</span>
              <span className="tabular">500+ мероприятий</span>
              <span className="opacity-40">·</span>
              <span>Школа Первого канала</span>
            </div>

            <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#calc"
                className="btn-gold h-14 px-7 rounded-full text-sm inline-flex items-center gap-2 leading-none"
              >
                Рассчитать стоимость
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#gallery"
                className="btn-ghost h-14 px-7 rounded-full text-sm inline-flex items-center gap-2 leading-none"
              >
                Посмотреть шоурил
              </a>
              <a
                href="https://www.instagram.com/farhad_ivanov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-gold transition-colors ml-2 inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
                @farhad_ivanov
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-5 [perspective:1200px]"
            onMouseMove={onMove}
          >
            <div
              ref={photoRef}
              className="hero-photo spotlight relative w-full aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[560px] rounded-3xl overflow-hidden placeholder-card gold-glow will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-text-muted text-xs uppercase tracking-widest z-[2]">
                фото в смокинге
              </div>
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-[2]">
                <span className="text-[10px] uppercase tracking-widest text-text-muted">портрет · 2026</span>
                <span className="text-[10px] uppercase tracking-widest text-gold">ФИ / 01</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-[2]">
                <div className="text-xs text-text-muted">Премиум-вечера</div>
                <div className="font-display text-xl mt-1 balance">Ведущий и спикер</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
