"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  {
    headline: "С президентом",
    sub: "Провёл мероприятие государственного уровня",
    image: "https://picsum.photos/id/1062/900/900",
  },
  {
    headline: "На ТВ",
    sub: "Веду новости в прямом эфире",
    image: "https://picsum.photos/id/96/900/900",
  },
  {
    headline: "Первый канал",
    sub: "Выпускник Школы ведущих",
    image: "https://picsum.photos/id/1043/900/900",
  },
  {
    headline: "Два языка",
    sub: "Веду на русском и татарском",
    image: "https://picsum.photos/id/823/900/900",
  },
];

export function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-line", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
        y: 70,
        rotation: -2.5,
        opacity: 0,
        transformOrigin: "left bottom",
        duration: 1.1,
        stagger: 0.1,
        ease: "expo.out",
      });

      gsap.from(".fact-card", {
        scrollTrigger: { trigger: ".facts-grid", start: "top 85%" },
        y: 90,
        rotation: (i) => (i % 2 === 0 ? -3 : 3),
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "expo.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="about"
      className="relative py-32 lg:py-40 border-t border-line bg-noise"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              / Обо мне
            </div>
            <h2 className="font-display font-black text-5xl lg:text-7xl leading-[0.9] tracking-[-0.04em] balance">
              <span className="about-line block">Не просто</span>
              <span className="about-line block">ведущий.</span>
              <span className="about-line block">Соавтор</span>
              <span className="about-line block">вашего вечера.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <p className="about-line text-lg lg:text-xl leading-relaxed text-text-muted pretty max-w-[65ch]">
              Меня зовут <span className="text-text">Фархад Иванов</span>. Веду
              мероприятия в Казани, Набережных Челнах и по всей России — от
              камерных свадеб до федеральных эфиров. Каждый сценарий пишу под
              пару, бренд или формат — без шаблонных шуток и неловких пауз.
            </p>

            <p className="about-line text-base lg:text-lg leading-relaxed text-text-muted pretty max-w-[65ch]">
              За плечами — Школа Первого канала, сотни корпоративов, телеэфиры и
              мероприятие с участием президента. Знаю, как держать зал в 30 и в
              500 человек. Работаю в смокинге и в свитере — главное, чтобы
              совпало с настроением вашего дня.
            </p>
          </div>
        </div>

        <div className="facts-grid mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {facts.map((f) => (
            <div
              key={f.headline}
              className="fact-card group relative aspect-square overflow-hidden rounded-2xl border border-line bg-bg-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
                draggable={false}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/10"
              />
              <div
                aria-hidden
                className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-gold/40 transition-colors"
              />

              <div className="relative z-[1] h-full flex flex-col justify-end p-6 lg:p-7">
                <div className="font-display font-black text-2xl lg:text-3xl text-text leading-[1.05] tracking-[-0.02em] mb-2 balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                  {f.headline}
                </div>
                <div className="text-xs lg:text-sm text-text-muted leading-relaxed pretty">
                  {f.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
