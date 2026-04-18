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
    image: "/images/about/president.jpg",
  },
  {
    headline: "На ТВ",
    sub: "Веду новости в прямом эфире",
    image: "/images/about/tv.jpg",
  },
  {
    headline: "Первый канал",
    sub: "Выпускник Школы ведущих",
    image: "/images/about/school.jpg",
  },
  {
    headline: "Два языка",
    sub: "Веду на русском и татарском",
    image: "/images/about/languages.jpg",
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
          {facts.map((f, i) => (
            <div
              key={f.headline}
              className="fact-card group relative aspect-square flex flex-col justify-between p-6 lg:p-8 rounded-2xl border border-line bg-bg-card/40 hover:border-gold/50 hover:bg-bg-card transition-colors"
            >
              <div className="font-display text-[11px] tabular text-gold/80 tracking-[0.2em]">
                / 0{i + 1}
              </div>
              <div>
                <div className="font-display font-black text-2xl lg:text-3xl text-text leading-[1.05] tracking-[-0.02em] mb-3 balance">
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
