export function Footer() {
  return (
    <footer className="border-t border-line py-16 bg-bg-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="font-display font-black text-3xl lg:text-4xl tracking-[-0.04em]">
              ФАРХАД ИВАНОВ
            </div>
            <p className="mt-6 text-sm text-text-muted max-w-sm pretty">
              Ведущий свадеб, корпоративов и ТВ-проектов. Казань, Набережные
              Челны и по всей России.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-text-muted mb-5">
              Связь
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://wa.me/79600714686"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors tabular"
              >
                +7 960 071-46-86
              </a>
              <a
                href="https://www.instagram.com/farhad_ivanov/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                @farhad_ivanov
              </a>
              <a
                href="mailto:farhad.ivanov.host@gmail.com"
                className="hover:text-gold transition-colors"
              >
                farhad.ivanov.host@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-text-muted mb-5">
              Разделы
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#about" className="text-text-muted hover:text-gold transition-colors">Обо мне</a>
              <a href="#services" className="text-text-muted hover:text-gold transition-colors">Услуги</a>
              <a href="#calc" className="text-text-muted hover:text-gold transition-colors">Калькулятор</a>
              <a href="#gallery" className="text-text-muted hover:text-gold transition-colors">Работы</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-text-muted mb-5">
              Документы
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a href="/privacy" className="text-text-muted hover:text-gold transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line text-xs text-text-muted leading-relaxed space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div>
              Иванов Фархад [—] · Самозанятый (НПД) · ИНН [—] · Казань, РФ
            </div>
            <div>© {new Date().getFullYear()} Все права защищены.</div>
          </div>
          <div className="max-w-3xl">
            Информация на сайте носит справочный характер и не является
            публичной офертой. Финальная стоимость и условия согласовываются
            индивидуально. Используя сайт, вы соглашаетесь с{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-gold">
              политикой конфиденциальности
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
