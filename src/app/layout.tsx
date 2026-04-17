import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
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
      className={`${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oddval:opsz,wght@10..72,400..900&display=swap"
        />
      </head>
      <body>
        <a href="#top" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
