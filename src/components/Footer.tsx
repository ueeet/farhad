export function Footer() {
  return (
    <footer className="border-t border-line py-12 bg-bg-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="font-display font-bold text-lg">
            ФАРХАД<span className="text-gold">.</span>ИВАНОВ
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-muted">
            <a
              href="https://wa.me/79600714686"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/farhad_ivanov/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="tel:+79600714686"
              className="hover:text-gold transition-colors"
            >
              +7 960 071-46-86
            </a>
          </div>

          <div className="text-xs text-text-muted">
            © {new Date().getFullYear()} Farhad Ivanov
          </div>
        </div>
      </div>
    </footer>
  );
}
