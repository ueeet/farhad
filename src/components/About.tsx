"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "500+", label: "Проведённых вечеров" },
  { value: "13.7K", label: "Подписчиков в Instagram" },
  { value: "5+", label: "Лет в профессии" },
  { value: "10/10", label: "Средняя оценка пар" },
];

const facts = [
  { headline: "С президентом", sub: "Провёл мероприятие государственного уровня" },
  { headline: "На ТВ", sub: "Веду новости в прямом эфире" },
  { headline: "Первый канал", sub: "Выпускник Школы ведущих" },
  { headline: "Два языка", sub: "Веду на русском и татарском" },
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
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".stat-block", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
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

            <div className="facts-grid grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {facts.map((f) => (
                <div
                  key={f.text}
                  className="fact-card group relative flex items-start gap-4 p-5 rounded-2xl border border-line bg-bg-card/40 hover:border-gold/60 hover:bg-bg-card transition-all"
                >
                  <span className="shrink-0 w-11 h-11 rounded-xl border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/70 transition-colors">
                    {f.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-1.5">
                      {f.tag}
                    </div>
                    <div className="text-sm lg:text-[15px] text-text leading-snug">
                      {f.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-grid mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-block bg-bg p-8 lg:p-10 group hover:bg-bg-soft transition-colors"
            >
              <div className="font-display font-black text-4xl lg:text-6xl text-gradient-gold tabular">
                {s.value}
              </div>
              <div className="mt-4 text-xs lg:text-sm text-text-muted uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
