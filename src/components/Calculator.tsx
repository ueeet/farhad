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
  { id: "wedding", label: "Свадьба", base: 60000, hint: "Под ключ, со сценарием" },
  { id: "corp", label: "Корпоратив", base: 80000, hint: "С интеграцией бренда" },
  { id: "birthday", label: "День рождения", base: 40000, hint: "Камерно или с размахом" },
  { id: "anniversary", label: "Юбилей", base: 50000, hint: "Личная история героя" },
  { id: "kids", label: "Детский праздник", base: 30000, hint: "С анимацией" },
  { id: "tv", label: "ТВ / спецпроект", base: 100000, hint: "Эфир, открытие, премия" },
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
  { id: "long", label: "6–8 ч", mult: 1.4 },
  { id: "all", label: "Весь день", mult: 1.8 },
];

const days = [
  { id: "weekday", label: "Будни", mult: 1.0 },
  { id: "weekend", label: "Выходной", mult: 1.15 },
  { id: "holiday", label: "Праздничный день", mult: 1.3 },
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
  const [day, setDay] = useState(days[1]);
  const [chosenExtras, setChosenExtras] = useState<string[]>([]);

  const total = useMemo(() => {
    const guestSurcharge = Math.max(0, guests - 50) * 250;
    const extrasSum = chosenExtras.reduce(
      (acc, id) => acc + (extras.find((e) => e.id === id)?.price ?? 0),
      0
    );
    const sub = (eventType.base + guestSurcharge + city.price + extrasSum) *
      duration.mult *
      day.mult;
    return Math.max(20000, sub);
  }, [eventType, guests, city, duration, day, chosenExtras]);

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
      gsap.from(".calc-anim", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
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

  const summary = `Здравствуйте, Фархад! Хочу обсудить:
— ${eventType.label}
— Гостей: ${guests}
— Город: ${city.label}
— Длительность: ${duration.label}
— День: ${day.label}
— Доп.: ${chosenExtras.length ? chosenExtras.map(id => extras.find(e=>e.id===id)?.label).join(", ") : "—"}
Расчёт по сайту: ${formatPrice(total)} ₽`;

  const waUrl = `https://wa.me/79600714686?text=${encodeURIComponent(summary)}`;

  return (
    <section
      ref={root}
      id="calc"
      className="relative py-32 lg:py-40 border-t border-line bg-bg-soft bg-noise"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 calc-anim">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              / 03 — Калькулятор
            </div>
            <h2 className="font-display font-black text-5xl lg:text-7xl leading-[0.9] tracking-tight max-w-3xl">
              Сколько стоит <span className="text-gradient-gold italic">ваш вечер</span>
            </h2>
          </div>
          <p className="text-text-muted max-w-md text-sm">
            Цены ориентировочные — финальная стоимость зависит от формата,
            сложности сценария и подрядчиков. Точную смету пришлю в WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-10 calc-anim">
            <Block label="Тип мероприятия">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {eventTypes.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => setEventType(e)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                      eventType.id === e.id
                        ? "border-gold bg-gold/5"
                        : "border-line hover:border-gold/40"
                    }`}
                  >
                    <div className="font-display font-bold">{e.label}</div>
                    <div className="text-xs text-text-muted mt-1">{e.hint}</div>
                  </button>
                ))}
              </div>
            </Block>

            <Block label={`Количество гостей: ${guests}`}>
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
              <div className="flex justify-between text-xs text-text-muted mt-3">
                <span>10</span>
                <span>100</span>
                <span>250</span>
                <span>500+</span>
              </div>
            </Block>

            <Block label="Где проводим">
              <ChipGroup
                items={cities}
                value={city.id}
                onChange={(id) => setCity(cities.find((c) => c.id === id)!)}
              />
            </Block>

            <Block label="Длительность работы">
              <ChipGroup
                items={durations}
                value={duration.id}
                onChange={(id) => setDuration(durations.find((d) => d.id === id)!)}
              />
            </Block>

            <Block label="День проведения">
              <ChipGroup
                items={days}
                value={day.id}
                onChange={(id) => setDay(days.find((d) => d.id === id)!)}
              />
            </Block>

            <Block label="Дополнительно">
              <div className="grid sm:grid-cols-2 gap-3">
                {extras.map((e) => {
                  const active = chosenExtras.includes(e.id);
                  return (
                    <button
                      key={e.id}
                      onClick={() => toggleExtra(e.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        active
                          ? "border-gold bg-gold/5"
                          : "border-line hover:border-gold/40"
                      }`}
                    >
                      <span className="flex items-center gap-3 text-sm">
                        <span
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            active ? "bg-gold border-gold" : "border-line"
                          }`}
                        >
                          {active && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12l5 5L20 7" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </span>
                        {e.label}
                      </span>
                      <span className="text-xs text-text-muted">
                        +{formatPrice(e.price)} ₽
                      </span>
                    </button>
                  );
                })}
              </div>
            </Block>
          </div>

          <div className="lg:col-span-4 calc-anim">
            <div className="lg:sticky lg:top-28 p-8 rounded-3xl border border-gold/30 bg-gradient-to-br from-bg-card to-bg gold-glow">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
                Итого
              </div>

              <div
                ref={totalRef}
                className="font-display font-black text-5xl lg:text-6xl leading-none text-gradient-gold tabular"
              >
                {formatPrice(total)} ₽
              </div>

              <p className="text-xs text-text-muted mt-4 leading-relaxed">
                Ориентировочная стоимость работы ведущего и заявленных опций.
                Аванс — 30%.
              </p>

              <div className="my-6 divider" />

              <div className="space-y-2 text-sm">
                <Row k="Формат" v={eventType.label} />
                <Row k="Гостей" v={String(guests)} />
                <Row k="Город" v={city.label} />
                <Row k="Длительность" v={duration.label} />
                <Row k="День" v={day.label} />
                {chosenExtras.length > 0 && (
                  <Row
                    k="Доп."
                    v={chosenExtras
                      .map((id) => extras.find((e) => e.id === id)?.label)
                      .join(", ")}
                  />
                )}
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-gold w-full px-6 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2"
              >
                Отправить в WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
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
      <div className="mb-4 text-sm text-text-muted uppercase tracking-wider">
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
    <div className="flex flex-wrap gap-3">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => onChange(it.id)}
          className={`px-5 py-3 rounded-full border text-sm transition-all duration-300 ${
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
