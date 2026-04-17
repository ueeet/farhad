"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSpotlight } from "./Spotlight";

gsap.registerPlugin(ScrollTrigger);

const waBase = "https://wa.me/79600714686?text=";

const hero = {
  no: "01",
  title: "Свадьбы",
  sub: "Сценарий, который про вас",
  desc: "Глубокое знакомство с парой, индивидуальный сценарий, тёплая динамика без затянутых блоков. Веду на двух языках при необходимости.",
  from: "80 000 ₽",
  cta: "Обсудить свадьбу",
  waMsg: "Здравствуйте, Фархад! Хочу обсудить свадьбу.",
  points: [
    "Личная встреча или Zoom",
    "Авторский сценарий под пару",
    "Сопровождение от сборов до банкета",
    "Координация с подрядчиками",
    "Двуязычный формат при необходимости",
  ],
};

const secondary = [
  {
    no: "02",
    title: "Корпоративы",
    sub: "Бренд, цели, аудитория",
    desc: "Мероприятия под ключ: новогодние, юбилеи фирмы, премии, тимбилдинги. Работаю с маркетингом — попадаю в tone of voice бренда.",
    from: "95 000 ₽",
    cta: "Обсудить корпоратив",
    waMsg: "Здравствуйте, Фархад! Интересует корпоратив.",
    points: ["Бриф с HR / маркетингом", "Интеграция бренда в сценарий", "Конферанс премий", "Модерация конференций"],
  },
  {
    no: "03",
    title: "ТВ и спецпроекты",
    sub: "Эфиры, открытия, премии",
    desc: "Веду новости, прямые эфиры, городские праздники и презентации. Опыт работы с большими сценами и федеральным уровнем.",
    from: "130 000 ₽",
    cta: "Обсудить эфир",
    waMsg: "Здравствуйте, Фархад! Нужен ведущий для ТВ / спецпроекта.",
    points: ["Прямые эфиры", "Пресс-конференции", "Городские праздники", "Закадровый голос"],
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);
  const onMove = useSpotlight();

  useGSAP(
    () => {
      gsap.from(".service-card", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="services"
      className="relative py-32 lg:py-48 border-t border-line"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              / 02 — Услуги
            </div>
            <h2 className="font-display font-black text-5xl lg:text-8xl leading-[0.9] tracking-[-0.04em] balance max-w-3xl">
              Что я <span className="text-gradient-gold italic">веду</span>
            </h2>
          </div>
          <p className="text-text-muted max-w-sm pretty">
            Три направления без скидок на качество. Любой формат начинается с
            разговора и заканчивается аплодисментами.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          <article
            onMouseMove={onMove}
            className="service-card spotlight group lg:col-span-7 lg:row-span-2 relative p-8 lg:p-12 rounded-3xl bg-bg-card border border-line overflow-hidden"
          >
            <div className="relative z-[2] flex flex-col h-full">
              <div className="flex items-start justify-between mb-10">
                <span className="font-display text-xs text-text-muted">
                  {hero.no} / 03
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold">
                  Флагман
                </span>
              </div>

              <h3 className="font-display font-black text-5xl lg:text-7xl tracking-[-0.04em] leading-[0.9] balance">
                {hero.title}
              </h3>
              <p className="mt-4 text-gold italic pretty">{hero.sub}</p>
              <p className="mt-8 text-text-muted leading-relaxed max-w-lg pretty">
                {hero.desc}
              </p>

              <ul className="mt-auto pt-12 space-y-2 border-t border-line">
                {hero.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 py-2 text-sm text-text-muted border-b border-line/50 last:border-0"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {secondary.map((s, i) => (
            <article
              key={s.no}
              onMouseMove={onMove}
              className={`service-card spotlight group lg:col-span-5 relative p-8 lg:p-10 rounded-3xl bg-bg-card border border-line overflow-hidden ${
                i === 1 ? "lg:translate-y-0" : ""
              }`}
            >
              <div className="relative z-[2]">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-xs text-text-muted">
                    {s.no} / 03
                  </span>
                  <span className="w-9 h-9 rounded-full border border-line flex items-center justify-center group-hover:border-gold group-hover:rotate-45 transition-all duration-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl lg:text-4xl tracking-[-0.03em] balance">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gold italic">{s.sub}</p>
                <p className="mt-5 text-sm text-text-muted leading-relaxed pretty">
                  {s.desc}
                </p>

                <ul className="mt-6 pt-5 space-y-2 border-t border-line">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-text-muted">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
