"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Showreel() {
  const root = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);

  useGSAP(
    () => {
      gsap.from(".sr-anim", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="showreel"
      className="relative py-32 lg:py-40 border-t border-line bg-bg-soft bg-noise"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 sr-anim">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              / Шоурил
            </div>
            <h2 className="font-display font-black text-5xl lg:text-8xl leading-[0.9] tracking-[-0.04em] balance max-w-3xl">
              Как это <span className="text-gradient-gold italic">звучит</span>
            </h2>
          </div>
          <p className="text-text-muted max-w-sm pretty">
            Кадры с реальных мероприятий. Голос, подача, работа с залом — всё то,
            что не расскажешь текстом.
          </p>
        </div>

        <div className="sr-anim relative aspect-video rounded-3xl overflow-hidden border border-line placeholder-card group">
          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              aria-label="Смотреть шоурил"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

              <div className="relative z-[2] flex flex-col items-center gap-6">
                <span className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-gold/60 flex items-center justify-center group-hover:scale-110 group-hover:border-gold transition-all duration-500 backdrop-blur-sm bg-bg/30">
                  <span className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gold flex items-center justify-center text-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 3l14 9-14 9V3z" />
                    </svg>
                  </span>
                </span>
                <div className="text-center">
                  <div className="font-display font-black text-2xl lg:text-3xl">Смотреть шоурил</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-text-muted">2:38 · 2025</div>
                </div>
              </div>

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-text-muted z-[2]">
                <span>REC · 01</span>
                <span className="tabular">HD · 1920×1080</span>
              </div>
            </button>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm">
              <div className="text-center">
                <div className="font-display text-base">Видео не подключено</div>
                <div className="mt-2 text-xs uppercase tracking-widest">
                  Положите ссылку на YouTube/Vimeo в Showreel.tsx
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sr-anim mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-text-muted uppercase tracking-[0.2em]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Открыт к новым датам на 2026
          </div>
          <a
            href="https://www.instagram.com/farhad_ivanov/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            Больше видео в Инстаграме
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
