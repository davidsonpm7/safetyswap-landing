import { Banknote, CheckCircle2, Lock, Ticket } from "lucide-react";

import { FadeIn } from "./FadeIn";
import { TicketField } from "./TicketField";

const STEPS = [
  {
    icon: Lock,
    color: "bg-blue-600",
    title: "Combine e pague com segurança",
    description:
      "Comprador e vendedor combinam o ingresso e o pagamento fica retido em custódia — ninguém recebe nada ainda.",
  },
  {
    icon: Ticket,
    color: "bg-violet-600",
    title: "Vendedor entrega o ingresso",
    description:
      "O vendedor transfere o ingresso pelo canal combinado e avisa que a entrega foi feita.",
  },
  {
    icon: CheckCircle2,
    color: "bg-amber-500",
    title: "Você confirma o recebimento",
    description:
      "O comprador confere se recebeu o ingresso certo e confirma dentro do app.",
  },
  {
    icon: Banknote,
    color: "bg-emerald-600",
    title: "Pagamento liberado",
    description:
      "Só depois da confirmação o valor sai da custódia e vai pro vendedor.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-16">
      <TicketField tone="light" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <FadeIn className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            Como funciona
          </h2>
          <p className="text-sm text-muted-foreground">
            Custódia de verdade, em 4 passos.
          </p>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <FadeIn key={step.title} delayMs={index * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${step.color}`}
                >
                  <step.icon size={20} className="text-white" />
                </div>

                <p className="mb-1 text-xs font-bold text-muted-foreground">
                  Passo {index + 1}
                </p>

                <h3 className="mb-2 font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
