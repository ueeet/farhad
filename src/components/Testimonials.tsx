"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Review = {
  name: string;
  role: string;
  text: string;
  tag: string;
};

const reviews: Review[] = [
  {
    name: "Алина и Артур",
    role: "Свадьба · 140 гостей · Казань",
    tag: "Свадьба",
    text: "Фархад реально вник в нашу историю. Гости весь вечер говорили, что это был не ведущий, а режиссёр момента. Сценарий был будто специально про нас.",
  },
  {
    name: "Наталья К.",
    role: "HR-директор, федеральный ритейл",
    tag: "Корпоратив",
    text: "Провёл нашу годовщину компании на 300 человек. Попал в тон бренда, вышел с подготовленными шутками, без клише. Команда два месяца вспоминала.",
  },
  {
    name: "Пресс-служба",
    role: "Открытие объекта · Набережные Челны",
    tag: "Спецпроект",
    text: "Нужен был ведущий федерального уровня на открытие. Работал параллельно с камерами прямого эфира, ни одной запинки. Забрали в запас на все ключевые даты.",
  },
  {
    name: "Диана и Руслан",
    role: "Свадьба · 80 гостей · Челны",
    tag: "Свадьба",
    text: "Сомневались, боялись, что на свадьбе будет скучно или слишком активно. Фархад вытянул ровно нашу динамику — родители тоже были в восторге.",
  },
];

export function Testimonials() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".t-card", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".t-head", {
        scrollTrigger: { trigger: root.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="reviews"
      className="relative py-32 lg:py-40 border-t border-line bg-noise"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6 t-head">
              / Отзывы
            </div>
            <h2 className="font-display font-black text-5xl lg:text-8xl leading-[0.9] tracking-[-0.04em] balance max-w-3xl t-head">
              Что говорят <span className="text-gradient-gold italic">после</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-text-muted uppercase tracking-[0.2em] t-head">
            <span className="font-display font-black text-3xl text-text tabular leading-none">10/10</span>
            <span className="max-w-[120px]">средняя оценка пар</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="t-card relative p-8 lg:p-10 rounded-3xl bg-bg-card border border-line hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-6 text-[10px] uppercase tracking-[0.25em] text-text-muted">
                <span>{String(i + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
                <span className="text-gold">{r.tag}</span>
              </div>

              <svg
                className="text-gold/40 mb-6"
                width="32" height="24" viewBox="0 0 32 24" fill="currentColor"
              >
                <path d="M0 24V12C0 5.4 5.4 0 12 0v4c-4.4 0-8 3.6-8 8h8v12H0zm20 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h8v12H20z" />
              </svg>

              <p className="text-base lg:text-lg text-text leading-relaxed pretty">
                {r.text}
              </p>

              <div className="mt-8 pt-6 border-t border-line">
                <div className="font-display font-bold text-text">{r.name}</div>
                <div className="mt-1 text-xs text-text-muted">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
