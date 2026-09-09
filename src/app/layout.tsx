import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Providers } from "./providers";

import "@/shared/styles/global.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "SafetySwap — Venda e compre ingresso sem risco de golpe",
  description:
    "Pagamento retido em custódia até você confirmar que recebeu o ingresso. Entre pra lista de fundadores e garanta taxa zero pra sempre.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
