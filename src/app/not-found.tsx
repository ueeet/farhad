import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center bg-bg text-text px-6 bg-noise">
      <div className="text-xs uppercase tracking-[0.3em] text-gold mb-8">
        Ошибка 404
      </div>
      <h1 className="font-display font-black text-7xl lg:text-9xl tracking-[-0.05em] text-gradient-gold">
        404
      </h1>
      <p className="mt-8 text-text-muted text-lg pretty max-w-md text-center">
        Такой страницы у меня не было. Зато есть хорошие свадьбы и эфиры — давай
        найдём.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="btn-gold h-14 px-7 rounded-full text-sm inline-flex items-center gap-2 leading-none"
        >
          Вернуться на главную
        </Link>
        <a
          href="https://wa.me/79600714686"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost h-14 px-7 rounded-full text-sm inline-flex items-center gap-2 leading-none"
        >
          Написать в WhatsApp
        </a>
      </div>
    </main>
  );
}
