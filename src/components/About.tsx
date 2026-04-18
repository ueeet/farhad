"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const process = [
  {
    no: "01",
    title: "Бриф",
    desc: "Созваниваемся или встречаемся за чашкой кофе. Узнаю всё о вас, гостях, поводе и настроении, которое хотите создать.",
    duration: "60–90 мин",
  },
  {
    no: "02",
    title: "Сценарий",
    desc: "Пишу авторский сценарий под вашу историю. Ни одного шаблонного блока, ни одной чужой шутки. Согласовываем правки в Telegram.",
    duration: "2–3 недели до даты",
  },
  {
    no: "03",
    title: "Команда",
    desc: "Свожу с подрядчиками — DJ, звук, фото, шоу. Координирую тайминг, чтобы день шёл без накладок и нервов.",
    duration: "за 2 недели",
  },
  {
    no: "04",
    title: "День",
    desc: "Приезжаю заранее. Веду от первого приветствия до последнего тоста. Реагирую на гостей, держу темп, работаю с залом.",
    duration: "ваш вечер",
  },
];

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
          toggleActions: "play reverse play reverse",
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
        scrollTrigger: {
          trigger: ".facts-grid",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        y: 90,
        rotation: (i) => (i % 2 === 0 ? -3 : 3),
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "expo.out",
      });

      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: ".process-block",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
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

            <blockquote className="about-line border-l-2 border-gold pl-6 lg:pl-8 py-2 my-4">
              <p className="font-display text-xl lg:text-2xl leading-snug text-text italic tracking-[-0.01em] balance">
                «Хороший ведущий — не тот, кто хорошо говорит. А тот, после кого
                гости весь год пересказывают вечер».
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.25em] text-text-muted">
                — Фархад Иванов
              </footer>
            </blockquote>

            <p className="about-line text-base text-text-muted leading-relaxed pretty max-w-[65ch]">
              Не работаю «потоком» — беру максимум 6 мероприятий в месяц, чтобы
              у каждого был полноценный сценарий и личное внимание. Если дата
              свободна — мы дойдём до неё в ритме без спешки.
            </p>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 process-block">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
                / Процесс
              </div>
              <h3 className="font-display font-black text-3xl lg:text-5xl leading-[1.05] tracking-[-0.03em] balance max-w-2xl">
                От первого звонка до последнего тоста
              </h3>
            </div>
            <p className="text-text-muted max-w-sm text-sm">
              Чёткие этапы без сюрпризов. Вы знаете, что и когда происходит —
              никаких «потом расскажу».
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-px lg:bg-line">
            {process.map((p) => (
              <div
                key={p.no}
                className="process-step group relative p-7 lg:p-8 bg-bg lg:hover:bg-bg-soft transition-colors border border-line lg:border-0 rounded-2xl lg:rounded-none"
              >
                <div className="font-display font-black text-5xl lg:text-6xl text-gold/20 group-hover:text-gold/40 transition-colors tabular leading-none">
                  {p.no}
                </div>
                <div className="mt-6 font-display font-bold text-xl lg:text-2xl text-text tracking-[-0.02em]">
                  {p.title}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                  {p.duration}
                </div>
                <p className="mt-4 text-sm text-text-muted leading-relaxed pretty">
                  {p.desc}
                </p>
              </div>
            ))}
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
