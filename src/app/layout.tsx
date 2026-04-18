import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Фархад Иванов — ведущий мероприятий | Казань, Набережные Челны",
  description:
    "Фархад Иванов — ведущий свадеб, корпоративов, ТВ-проектов. Выпускник Школы Первого канала. Казань, Набережные Челны и любые города.",
  openGraph: {
    title: "Фархад Иванов — ведущий мероприятий",
    description:
      "Свадьбы, корпоративы, ТВ-эфиры. Премиум-уровень и индивидуальный сценарий.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${unbounded.variable}`}
    >
      <body>
        <a href="#top" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
