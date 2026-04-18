"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-line", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".contact-card", {
        scrollTrigger: { trigger: root.current, start: "top 60%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="contact"
      className="relative py-32 lg:py-44 border-t border-line bg-noise overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/8 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-8 text-center">
          / 05 — Свяжемся
        </div>

        <h2 className="text-center font-display font-black text-5xl lg:text-8xl leading-[1.05] tracking-tight pb-2">
          <span className="cta-line block">Расскажите</span>
          <span className="cta-line block text-gold italic px-[0.1em]">
            о своём вечере
          </span>
        </h2>

        <p className="cta-line text-center text-text-body text-lg max-w-xl mx-auto mt-8">
          Ответ в течение часа. Бесплатно обсудим формат, дату и сценарные
          возможности.
        </p>

        <div className="mt-16 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <ContactCard
            href="https://wa.me/79600714686"
            label="WhatsApp"
            value="+7 960 071-46-86"
            primary
          />
          <ContactCard
            href="tel:+79600714686"
            label="Телефон"
            value="+7 960 071-46-86"
          />
          <ContactCard
            href="https://www.instagram.com/farhad_ivanov/"
            label="Instagram"
            value="@farhad_ivanov"
          />
        </div>

        <div className="contact-card mt-16 text-center text-xs text-text-muted uppercase tracking-widest">
          Казань · Набережные Челны · Россия · Зарубеж
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  label,
  value,
  primary,
}: {
  href: string;
  label: string;
  value: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact-card group block p-6 rounded-2xl border transition-all duration-500 ${
        primary
          ? "border-gold bg-gradient-to-br from-gold/10 to-transparent hover:from-gold/20"
          : "border-line bg-bg-soft hover:border-gold/40"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-widest text-text-muted">
          {label}
        </span>
        <span className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:border-gold group-hover:rotate-45 transition-all duration-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </span>
      </div>
      <div className="font-display font-bold text-lg lg:text-xl">{value}</div>
    </a>
  );
}
