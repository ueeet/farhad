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
  "Провёл мероприятие с президентом",
  "Веду новости на ТВ",
  "Выпускник Школы Первого канала",
  "Работаю на двух языках",
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
              / 01 — Обо мне
            </div>
            <h2 className="font-display font-black text-5xl lg:text-7xl leading-[0.9] tracking-[-0.04em] balance">
              <span className="about-line block">Не просто</span>
              <span className="about-line block text-gradient-gold italic">ведущий.</span>
              <span className="about-line block">Соавтор</span>
              <span className="about-line block">вашего вечера.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <p className="about-line text-lg lg:text-xl leading-relaxed text-text-muted">
              Меня зовут <span className="text-text">Фархад Иванов</span>. Веду
              мероприятия в Казани, Набережных Челнах и по всей России — от
              камерных свадеб до федеральных эфиров. Каждый сценарий пишу под
              пару, бренд или формат — без шаблонных шуток и неловких пауз.
            </p>

            <p className="about-line text-base lg:text-lg leading-relaxed text-text-muted">
              За плечами — Школа Первого канала, сотни корпоративов, телеэфиры и
              мероприятие с участием президента. Знаю, как держать зал в 30 и в
              500 человек. Работаю в смокинге и в свитере — главное, чтобы
              совпало с настроением вашего дня.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {facts.map((f) => (
                <span
                  key={f}
                  className="about-line inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-xs text-text-muted hover:border-gold/50 hover:text-text transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {f}
                </span>
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
              <div className="font-display font-black text-4xl lg:text-6xl text-gradient-gold">
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
