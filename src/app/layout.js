import { Inter } from "next/font/google";
import { Suspense } from "react";
import { YandexMetrika } from "../features/yandexMetrica/yandexMetrica";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ТАХОДРАЙВЕР - установка тахографов в Липецке и Липецкой области",
  description:
    "Установка тахографов в Липецке и Липецкой области, оформление карты водителя Липецке и Липецкой области, замена блока НКМ в Липецке и Липецкой области",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Suspense>
          <YandexMetrika />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
