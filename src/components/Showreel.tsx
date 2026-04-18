"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const showreelUrl = "";

export function Showreel() {
  const root = useRef<HTMLElement>(null);
  const hasVideo = showreelUrl.length > 0;

  useGSAP(
    () => {
      gsap.from(root.current!.querySelector("h2"), {
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 80,
        rotation: -2.5,
        opacity: 0,
        transformOrigin: "left bottom",
        duration: 1.3,
        ease: "expo.out",
      });

      gsap.from(".sr-anim", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
        y: 70,
        scale: 0.96,
        opacity: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: "expo.out",
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
            <h2 className="font-display font-black text-5xl lg:text-8xl leading-[1.05] tracking-[-0.04em] balance max-w-3xl pb-2">
              Как это <span className="text-gradient-gold italic inline-block pr-[0.1em] pb-[0.18em] -mb-[0.18em]">звучит</span>
            </h2>
          </div>
          <p className="text-text-muted max-w-sm pretty">
            Кадры с реальных мероприятий. Голос, подача, работа с залом — всё то,
            что не расскажешь текстом.
          </p>
        </div>

        <div className="sr-anim relative aspect-video rounded-3xl overflow-hidden border border-line placeholder-card group">
          {hasVideo ? (
            <iframe
              src={showreelUrl}
              title="Шоурил Фархада Иванова"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

              <div className="relative z-[2] flex flex-col items-center gap-6">
                <span className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-gold/60 flex items-center justify-center backdrop-blur-sm bg-bg/30">
                  <span className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 8v4l3 2" /><circle cx="12" cy="12" r="9" />
                    </svg>
                  </span>
                </span>
                <div className="text-center">
                  <div className="font-display font-black text-2xl lg:text-3xl">Шоурил скоро</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gold">Монтаж · 2026</div>
                </div>
              </div>

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-text-muted z-[2]">
                <span>REC · 01</span>
                <span className="tabular">HD · 1920×1080</span>
              </div>
            </div>
          )}
        </div>

        <div className="sr-anim mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-text-muted uppercase tracking-[0.2em]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
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
