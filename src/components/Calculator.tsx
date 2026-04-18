"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type EventType = {
  id: string;
  label: string;
  base: number;
  hint: string;
};

const eventTypes: EventType[] = [
  { id: "wedding", label: "Свадьба", base: 80000, hint: "Под ключ, со сценарием" },
  { id: "corp", label: "Корпоратив", base: 95000, hint: "С интеграцией бренда" },
  { id: "birthday", label: "День рождения", base: 55000, hint: "Камерно или с размахом" },
  { id: "anniversary", label: "Юбилей", base: 70000, hint: "Личная история героя" },
  { id: "kids", label: "Детский праздник", base: 40000, hint: "С анимацией" },
  { id: "tv", label: "ТВ / спецпроект", base: 130000, hint: "Эфир, открытие, премия" },
];

const cities = [
  { id: "kazan", label: "Казань", price: 0 },
  { id: "chelny", label: "Набережные Челны", price: 0 },
  { id: "ru", label: "Другой город РФ", price: 25000 },
  { id: "world", label: "Зарубеж", price: 80000 },
];

const durations = [
  { id: "short", label: "До 3 ч", mult: 0.7 },
  { id: "mid", label: "4–5 ч", mult: 1.0 },
  { id: "long", label: "6–8 ч", mult: 1.5 },
  { id: "all", label: "Весь день", mult: 1.9 },
];

const extras = [
  { id: "dj", label: "DJ", price: 30000 },
  { id: "sound", label: "Звук и свет", price: 25000 },
  { id: "photo", label: "Фотограф", price: 35000 },
  { id: "video", label: "Видеограф", price: 45000 },
  { id: "show", label: "Шоу-программа", price: 40000 },
  { id: "second", label: "Второй ведущий", price: 35000 },
];

const formatPrice = (n: number) =>
  new Intl.NumberFormat("ru-RU").format(Math.round(n / 100) * 100);

export function Calculator() {
  const root = useRef<HTMLElement>(null);
  const totalRef = useRef<HTMLDivElement>(null);

  const [eventType, setEventType] = useState(eventTypes[0]);
  const [guests, setGuests] = useState(80);
  const [city, setCity] = useState(cities[0]);
  const [duration, setDuration] = useState(durations[1]);
  const [chosenExtras, setChosenExtras] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  const total = useMemo(() => {
    const guestSurcharge = Math.max(0, guests - 50) * 250;
    const extrasSum = chosenExtras.reduce(
      (acc, id) => acc + (extras.find((e) => e.id === id)?.price ?? 0),
      0
    );
    const sub = (eventType.base + guestSurcharge + city.price + extrasSum) *
      duration.mult;
    return Math.max(20000, sub);
  }, [eventType, guests, city, duration, chosenExtras]);

  const prevTotal = useRef(total);
  useEffect(() => {
    if (!totalRef.current) return;
    const obj = { val: prevTotal.current };
    gsap.to(obj, {
      val: total,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        if (totalRef.current) {
          totalRef.current.textContent = formatPrice(obj.val) + " ₽";
        }
      },
      onComplete: () => {
        prevTotal.current = total;
      },
    });
  }, [total]);

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

      gsap.from(".calc-anim", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
        y: 60,
        x: (i) => (i === 0 ? 0 : i === 2 ? 40 : -40),
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "expo.out",
      });
    },
    { scope: root }
  );

  const toggleExtra = (id: string) => {
    setChosenExtras((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const guestPercent = ((guests - 10) / (500 - 10)) * 100;

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length >= 10;
  const formValid = name.trim().length >= 2 && phoneValid;

  const summary = `Здравствуйте, Фархад! Меня зовут ${name || "—"} (тел.: ${phone || "—"}).
Хочу обсудить:
— ${eventType.label}
— Гостей: ${guests}
— Город: ${city.label}
— Длительность: ${duration.label}
— Доп.: ${chosenExtras.length ? chosenExtras.map(id => extras.find(e=>e.id===id)?.label).join(", ") : "—"}
Расчёт по сайту: ${formatPrice(total)} ₽`;

  const waUrl = `https://wa.me/79600714686?text=${encodeURIComponent(summary)}`;

  const freeDates = ["12 дек", "25 дек", "31 дек", "14 янв", "28 янв"];

  return (
    <section
      ref={root}
      id="calc"
      className="relative py-24 lg:py-32 border-t border-line bg-bg-soft bg-noise"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6 calc-anim">
            <div className="mb-4">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
                / Смета
              </div>
              <h2 className="font-display font-black text-5xl lg:text-8xl leading-[1.05] tracking-[-0.04em] balance max-w-3xl pb-2">
                Сколько стоит <span className="italic inline-block pr-[0.1em] pb-[0.18em] -mb-[0.18em]">ваш вечер</span>
              </h2>
              <p className="text-text-muted max-w-md text-sm mt-6">
                Цены ориентировочные — финальная стоимость зависит от формата,
                сложности сценария и подрядчиков. Точную смету пришлю в WhatsApp.
                Расчёт не является публичной офертой.
              </p>
            </div>
            <Block label="Тип мероприятия">
              <ChipGroup
                items={eventTypes}
                value={eventType.id}
                onChange={(id) => setEventType(eventTypes.find((e) => e.id === id)!)}
              />
            </Block>

            <Block label={`Гостей: ${guests}`}>
              <input
                type="range"
                min={10}
                max={500}
                step={10}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                style={{ "--val": `${guestPercent}%` } as React.CSSProperties}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>10</span>
                <span>100</span>
                <span>250</span>
                <span>500+</span>
              </div>
            </Block>

            <div className="grid sm:grid-cols-2 gap-6">
              <Block label="Город">
                <ChipGroup
                  items={cities}
                  value={city.id}
                  onChange={(id) => setCity(cities.find((c) => c.id === id)!)}
                />
              </Block>

              <Block label="Длительность">
                <ChipGroup
                  items={durations}
                  value={duration.id}
                  onChange={(id) => setDuration(durations.find((d) => d.id === id)!)}
                />
              </Block>
            </div>

            <Block label="Дополнительно">
              <div className="flex flex-wrap gap-2">
                {extras.map((e) => {
                  const active = chosenExtras.includes(e.id);
                  return (
                    <button
                      key={e.id}
                      onClick={() => toggleExtra(e.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm transition-all duration-300 ${
                        active
                          ? "border-gold bg-gold/5 text-text"
                          : "border-line text-text-muted hover:border-gold/40 hover:text-text"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          active ? "bg-gold border-gold" : "border-line"
                        }`}
                      >
                        {active && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12l5 5L20 7" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                      {e.label}
                      <span className="text-xs text-text-muted">
                        +{formatPrice(e.price)} ₽
                      </span>
                    </button>
                  );
                })}
              </div>
            </Block>
          </div>

          <div className="lg:col-span-5 calc-anim flex">
            <div className="w-full p-8 lg:p-10 rounded-3xl border border-gold/30 bg-gradient-to-br from-bg-card to-bg gold-glow flex flex-col">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-8">
                Итого
              </div>

              <div
                ref={totalRef}
                className="font-display font-black text-6xl lg:text-7xl leading-none text-gradient-gold tabular"
              >
                {formatPrice(total)} ₽
              </div>

              <p className="text-sm text-text-muted mt-6 leading-relaxed max-w-xs">
                Примерный расчёт для выбранных параметров. Точную смету пришлю
                после короткого брифа.
              </p>

              <div className="my-auto py-8 space-y-3 text-sm border-y border-line/60">
                <Row k="Формат" v={eventType.label} />
                <Row k="Гостей" v={String(guests)} />
                <Row k="Город" v={city.label} />
                <Row k="Длительность" v={duration.label} />
                {chosenExtras.length > 0 && (
                  <Row
                    k="Доп."
                    v={chosenExtras
                      .map((id) => extras.find((e) => e.id === id)?.label)
                      .join(", ")}
                  />
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-text-muted">
                <span className="inline-flex items-center gap-2 mr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="uppercase tracking-[0.2em] text-gold">Свободно</span>
                </span>
                {freeDates.map((d) => (
                  <span
                    key={d}
                    className="px-2.5 py-1 rounded-full border border-line/80 bg-bg/40 text-text tabular"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setTouched(true);
                  if (!formValid) return;
                  window.open(waUrl, "_blank", "noopener,noreferrer");
                }}
                className="mt-6 space-y-2"
              >
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-full bg-bg/40 border text-sm text-text placeholder:text-text-muted/70 outline-none transition-colors ${
                      touched && name.trim().length < 2
                        ? "border-red-500/60"
                        : "border-line focus:border-gold/60"
                    }`}
                    autoComplete="given-name"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4 py-3 rounded-full bg-bg/40 border text-sm text-text placeholder:text-text-muted/70 outline-none transition-colors tabular ${
                      touched && !phoneValid
                        ? "border-red-500/60"
                        : "border-line focus:border-gold/60"
                    }`}
                    autoComplete="tel"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full px-6 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2"
                >
                  Отправить расчёт Фархаду
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p className="text-[10px] text-text-muted leading-relaxed pt-1">
                  Открою WhatsApp с готовым сообщением. Отвечу в течение часа.
                  Нажимая, вы соглашаетесь с{" "}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-gold">
                    политикой
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 text-[11px] text-text-muted uppercase tracking-[0.2em]">
        {label}
      </div>
      {children}
    </div>
  );
}

function ChipGroup<T extends { id: string; label: string }>({
  items,
  value,
  onChange,
}: {
  items: readonly T[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => onChange(it.id)}
          className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
            value === it.id
              ? "border-gold bg-gold/5 text-text"
              : "border-line text-text-muted hover:border-gold/40 hover:text-text"
          }`}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-text-muted shrink-0">{k}</span>
      <span className="text-right text-text">{v}</span>
    </div>
  );
}
