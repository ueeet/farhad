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
      gsap.from(root.current!.querySelector("h2"), {
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 90,
        rotation: -3,
        opacity: 0,
        transformOrigin: "left bottom",
        duration: 1.3,
        ease: "expo.out",
      });

      gsap.from(root.current!.querySelector("h2 ~ p"), {
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        y: 100,
        rotation: (i) => (i % 2 === 0 ? -2.5 : 2.5),
        scale: 0.94,
        opacity: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: "expo.out",
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
              / Услуги
            </div>
            <h2 className="font-display font-black text-5xl lg:text-8xl leading-[1.05] tracking-[-0.04em] balance max-w-3xl pb-2">
              Что я <span className="text-gradient-gold italic inline-block pr-[0.1em] pb-[0.18em] -mb-[0.18em]">веду</span>
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
              <div className="flex items-start justify-end mb-10">
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

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm">
                  <span className="text-text-muted">от </span>
                  <span className="font-display font-black text-2xl lg:text-3xl text-text tabular">{hero.from}</span>
                </div>
                <a
                  href={`${waBase}${encodeURIComponent(hero.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gold text-bg text-sm font-medium hover:bg-gold-bright transition-colors"
                >
                  {hero.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
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
                <div className="mb-8">
                  <span className="font-display text-xs text-text-muted">
                    {s.no}
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

                <div className="mt-6 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs">
                    <span className="text-text-muted">от </span>
                    <span className="font-display font-black text-xl text-text tabular">{s.from}</span>
                  </div>
                  <a
                    href={`${waBase}${encodeURIComponent(s.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/50 text-gold text-xs hover:border-gold hover:bg-gold/10 transition-all"
                  >
                    {s.cta}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
