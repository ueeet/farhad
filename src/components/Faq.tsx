"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    q: "Как забронировать дату?",
    a: "Пишете в WhatsApp — сверяем свободные даты. После короткого брифа отправляю смету и договор. Бронь фиксируется авансом 30%.",
  },
  {
    q: "Какой аванс и когда остаток?",
    a: "Аванс — 30% при подписании договора. Остаток — в день мероприятия наличными или переводом. Возврат аванса возможен при отмене минимум за 60 дней.",
  },
  {
    q: "Работаете на двух языках?",
    a: "Да. Веду свадьбы и мероприятия на русском и татарском языках, включая смешанные форматы. Это не переводчик на сцене — это ровная двуязычная подача.",
  },
  {
    q: "Выезжаете в другие города?",
    a: "Езжу по всей России. Казань и Набережные Челны — без доплат. Другие города РФ — +25 000 ₽ к смете (дорога, проживание). Зарубежные даты — отдельно.",
  },
  {
    q: "Что если заболеете в день мероприятия?",
    a: "У меня сеть проверенных коллег-ведущих уровня Школы Первого канала. Замена выходит за 12 часов с полным брифом — такой кейс был один раз за 5 лет.",
  },
  {
    q: "Нужен ли DJ, звук, свет — организуете?",
    a: "Работаю со своим пулом подрядчиков по Казани и Челнам. Могу собрать команду под ключ или работать с вашими. Цены проверенные, без накруток.",
  },
  {
    q: "Когда выходит финальный сценарий?",
    a: "Первый черновик — за 3 недели до мероприятия. Финальная версия с корректировками — за 7 дней. Все правки обсуждаем в Telegram-чате.",
  },
];

export function Faq() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useGSAP(
    () => {
      gsap.from(".faq-anim", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="faq"
      className="relative py-32 lg:py-40 border-t border-line"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start faq-anim">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              / FAQ
            </div>
            <h2 className="font-display font-black text-5xl lg:text-7xl leading-[1.05] tracking-[-0.04em] balance pb-2">
              Частые <span className="text-gradient-gold italic inline-block pr-[0.1em] pb-[0.18em] -mb-[0.18em]">вопросы</span>
            </h2>
            <p className="mt-8 text-text-muted max-w-sm pretty">
              Если вашего вопроса нет в списке — пишите в WhatsApp, отвечаю
              в течение дня.
            </p>

            <a
              href="https://wa.me/79600714686"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gold/50 text-gold text-sm hover:border-gold hover:bg-gold/5 transition-all"
            >
              Написать в WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </a>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`faq-anim rounded-2xl border transition-colors duration-300 ${
                    isOpen ? "border-gold/40 bg-bg-card" : "border-line hover:border-gold/30"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 p-6 lg:p-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex gap-4 items-start">
                      <span className="font-display text-xs text-text-muted mt-1 tabular">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display font-bold text-lg lg:text-xl text-text">
                        {it.q}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "border-gold bg-gold text-bg rotate-45" : "border-line text-text"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 lg:px-7 pb-6 lg:pb-7 pl-[3.5rem] lg:pl-[3.75rem]">
                        <p className="text-sm lg:text-base text-text-muted leading-relaxed pretty">
                          {it.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
