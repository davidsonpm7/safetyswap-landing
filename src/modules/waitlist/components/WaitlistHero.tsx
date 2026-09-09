"use client";

import { Zap } from "lucide-react";

import { Button } from "@/shared/components/ui/Button";

import { CategoryChips } from "./CategoryChips";
import { EscrowMockupCard } from "./EscrowMockupCard";
import { SlotsProgressBar } from "./SlotsProgressBar";
import { TicketField } from "./TicketField";

interface Props {
  count: number;
  total: number;
  onCtaClick: () => void;
}

export function WaitlistHero({ count, total, onCtaClick }: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#172554",
        backgroundImage:
          "radial-gradient(ellipse 85% 78% at 70% 45%, rgba(37,99,235,0.6) 0%, rgba(37,99,235,0.28) 35%, rgba(37,99,235,0) 85%)",
      }}
    >
      <TicketField tone="dark" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-b from-transparent via-background/70 to-background sm:h-64" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Venda e compre ingresso{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                sem risco de golpe
              </span>
            </h1>

            <p className="mb-8 max-w-md text-lg leading-relaxed text-blue-100">
              Seu pagamento fica retido em custódia até você confirmar que
              recebeu o ingresso — só aí o dinheiro é liberado pro vendedor.
              Nada de PIX enviado pra perfil fake.
            </p>

            <CategoryChips />

            <div className="mb-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="founder"
                className="animate-founder-pulse text-base"
                onClick={onCtaClick}
              >
                <Zap size={18} className="mr-1" />
                Quero minha vaga de fundador
              </Button>
            </div>

            <SlotsProgressBar count={count} total={total} />
          </div>

          <div className="flex items-center justify-center">
            <EscrowMockupCard />
          </div>
        </div>
      </div>
    </section>
  );
}
