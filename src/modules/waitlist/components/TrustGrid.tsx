import { Award, Flag, Lock, MessageCircle } from "lucide-react";

import { FadeIn } from "./FadeIn";
import { TicketField } from "./TicketField";

const ITEMS = [
  {
    icon: Lock,
    color: "bg-blue-600",
    title: "Pagamento em custódia",
    description:
      "O dinheiro fica retido numa conta segura até a entrega ser confirmada. Ninguém recebe antes da hora.",
  },
  {
    icon: Award,
    color: "bg-amber-500",
    title: "Verificação de identidade",
    description:
      "Compradores e vendedores passam por checagem de identidade antes de fechar negócio.",
  },
  {
    icon: MessageCircle,
    color: "bg-cyan-600",
    title: "Chat direto no app",
    description:
      "Combine os detalhes da entrega com o comprador ou vendedor sem sair da plataforma.",
  },
  {
    icon: Flag,
    color: "bg-red-600",
    title: "Suporte em disputas",
    description:
      "Deu problema? Nosso time entra na negociação e resolve antes de liberar o pagamento.",
  },
];

export function TrustGrid() {
  return (
    <section className="relative overflow-hidden py-16">
      <TicketField tone="light" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <FadeIn className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            Por que confiar no SafetySwap
          </h2>
          <p className="text-sm text-muted-foreground">
            Feito pra tirar o medo de comprar ingresso de estranho.
          </p>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <FadeIn key={item.title} delayMs={index * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
                >
                  <item.icon size={20} className="text-white" />
                </div>

                <h3 className="mb-2 font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
