"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    no: "01",
    title: "Свадьбы",
    sub: "Сценарий, который про вас",
    desc: "Глубокое знакомство с парой, индивидуальный сценарий, тёплая динамика без затянутых блоков. Веду на двух языках при необходимости.",
    points: [
      "Личная встреча или Zoom",
      "Авторский сценарий",
      "Сопровождение от сборов до банкета",
      "Координация с подрядчиками",
    ],
  },
  {
    no: "02",
    title: "Корпоративы",
    sub: "Бренд, цели, аудитория",
    desc: "Мероприятия для компаний под ключ: новогодние, юбилеи фирмы, премии, тимбилдинги. Работаю с маркетингом — попадаю в tone of voice бренда.",
    points: [
      "Бриф с маркетингом / HR",
      "Интеграция бренда в сценарий",
      "Конферанс премий и награждений",
      "Модерация конференций",
    ],
  },
  {
    no: "03",
    title: "ТВ и спецпроекты",
    sub: "Эфиры, презентации, шоу",
    desc: "Веду новости и телепроекты, открытия, городские праздники. Опыт работы с большими сценами и прямыми эфирами на федеральном уровне.",
    points: [
      "Прямые эфиры на ТВ",
      "Открытия и пресс-конференции",
      "Городские праздники",
      "Закадровый голос и озвучка",
    ],
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="services"
      className="relative py-32 lg:py-40 border-t border-line"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              / 02 — Услуги
            </div>
            <h2 className="font-display font-black text-5xl lg:text-7xl leading-[0.9] tracking-tight max-w-3xl">
              Что я <span className="text-gradient-gold italic">веду</span>
            </h2>
          </div>
          <p className="text-text-muted max-w-md">
            Три направления, в которых я работаю без скидок на качество. Любой
            формат начинается с разговора и заканчивается аплодисментами.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-line border border-line">
          {services.map((s) => (
            <div
              key={s.no}
              className="service-card group bg-bg p-8 lg:p-10 hover:bg-bg-soft transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-xs text-text-muted">
                  {s.no}
                </span>
                <span className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-gold group-hover:rotate-45 transition-all duration-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </span>
              </div>

              <h3 className="font-display font-black text-3xl lg:text-4xl mb-2">
                {s.title}
              </h3>
              <p className="text-gold text-sm mb-6">{s.sub}</p>
              <p className="text-text-muted leading-relaxed mb-8">{s.desc}</p>

              <ul className="space-y-3 pt-6 border-t border-line">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-text-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
