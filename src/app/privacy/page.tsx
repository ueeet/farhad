import Link from "next/link";

export const metadata = {
  title: "Политика конфиденциальности — Фархад Иванов",
  description:
    "Политика обработки персональных данных пользователей сайта farhad-ivanov.ru.",
};

const updated = "18 апреля 2026 г.";

export default function PrivacyPage() {
  return (
    <main className="relative bg-bg text-text min-h-screen">
      <div className="mx-auto max-w-[900px] px-6 lg:px-12 py-24 lg:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-10 hover:text-gold-bright transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          На главную
        </Link>

        <h1 className="font-display font-black text-4xl lg:text-6xl leading-[1.05] tracking-[-0.04em] balance pb-2">
          Политика конфиденциальности
        </h1>
        <div className="mt-4 text-sm text-text-muted">Редакция от {updated}</div>

        <div className="mt-12 space-y-10 text-text-muted leading-relaxed pretty">
          <Section title="1. Общие положения">
            Настоящая Политика обработки персональных данных (далее — «Политика»)
            определяет порядок обработки и защиты информации о физических лицах,
            пользующихся сайтом <span className="text-text">farhad-ivanov.ru</span>{" "}
            (далее — «Сайт»). Оператором персональных данных является Иванов
            Фархад [—], ИНН [—], статус: самозанятый (плательщик НПД).
          </Section>

          <Section title="2. Какие данные обрабатываются">
            При взаимодействии с Сайтом могут обрабатываться следующие данные:
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>
                Имя, телефон, e-mail, мессенджер — если вы указали их в
                сообщении WhatsApp, на e-mail или при заполнении калькулятора.
              </li>
              <li>
                Технические данные: IP-адрес, тип устройства, браузер, источник
                перехода, поведение на Сайте — собираются автоматически
                сервисами веб-аналитики (Яндекс.Метрика, Google Analytics).
              </li>
              <li>Cookie-файлы — для корректной работы Сайта и аналитики.</li>
            </ul>
          </Section>

          <Section title="3. Цели обработки">
            <ul className="space-y-2 list-disc pl-6">
              <li>Связь с пользователем для обсуждения мероприятия.</li>
              <li>Подготовка коммерческого предложения и сметы.</li>
              <li>Улучшение работы Сайта и качества контента.</li>
              <li>Соблюдение требований законодательства РФ.</li>
            </ul>
          </Section>

          <Section title="4. Правовые основания">
            Обработка осуществляется на основании согласия пользователя,
            выражаемого фактом заполнения форм или использования каналов связи
            (WhatsApp, телефон, e-mail), а также на основании ст. 6
            Федерального закона № 152-ФЗ «О персональных данных».
          </Section>

          <Section title="5. Передача третьим лицам">
            Персональные данные не передаются третьим лицам, за исключением:
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li>
                сервисов веб-аналитики (ООО «ЯНДЕКС», Google LLC) — в рамках
                их публичных политик;
              </li>
              <li>
                мессенджера WhatsApp (Meta Platforms, Inc.) — при инициации
                переписки пользователем;
              </li>
              <li>уполномоченных государственных органов по их законному запросу.</li>
            </ul>
          </Section>

          <Section title="6. Хранение и защита">
            Данные хранятся не дольше, чем требуется для достижения целей
            обработки, либо до отзыва согласия. Применяются организационные и
            технические меры защиты от неправомерного доступа, изменения и
            удаления.
          </Section>

          <Section title="7. Права пользователя">
            Пользователь вправе в любой момент отозвать согласие на обработку
            персональных данных, запросить уточнение, блокирование или удаление
            своих данных, направив запрос на e-mail{" "}
            <a
              href="mailto:farhad.ivanov.host@gmail.com"
              className="text-text underline underline-offset-4 hover:text-gold"
            >
              farhad.ivanov.host@gmail.com
            </a>
            .
          </Section>

          <Section title="8. Cookie-файлы">
            Сайт использует cookie для сохранения предпочтений пользователя и
            работы аналитики. Вы можете отключить cookie в настройках браузера —
            это не повлияет на основной функционал Сайта.
          </Section>

          <Section title="9. Изменения в Политике">
            Оператор вправе вносить изменения в настоящую Политику. Актуальная
            редакция всегда доступна по адресу{" "}
            <span className="text-text">farhad-ivanov.ru/privacy</span>. Дата
            редакции указана в начале документа.
          </Section>

          <Section title="10. Контакты оператора">
            <ul className="space-y-1">
              <li>Иванов Фархад [—]</li>
              <li>Статус: самозанятый (НПД)</li>
              <li>ИНН: [—]</li>
              <li>
                E-mail:{" "}
                <a
                  href="mailto:farhad.ivanov.host@gmail.com"
                  className="text-text underline underline-offset-4 hover:text-gold"
                >
                  farhad.ivanov.host@gmail.com
                </a>
              </li>
              <li>Телефон: +7 960 071-46-86</li>
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display font-bold text-xl lg:text-2xl text-text mb-4 tracking-[-0.02em]">
        {title}
      </h2>
      <div className="text-sm lg:text-base">{children}</div>
    </section>
  );
}
