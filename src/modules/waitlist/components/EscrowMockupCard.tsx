"use client";

import { useEffect, useState } from "react";
import { Check, Lock, PackageCheck, ShieldCheck, Wallet } from "lucide-react";

import { cn } from "@/shared/utils/cn";

const STEPS = [
  { label: "Pagamento retido", icon: Lock },
  { label: "Vendedor entregou", icon: PackageCheck },
  { label: "Aguardando confirmação", icon: ShieldCheck },
  { label: "Pagamento liberado", icon: Wallet },
];

const STEP_INTERVAL_MS = 2600;

export function EscrowMockupCard() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, STEP_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-blue-200">
            Transação em custódia
          </p>
          <p className="font-bold text-white">Ingresso · Pista Premium</p>
        </div>

        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/20 px-2.5 py-1 text-xs font-bold text-emerald-300">
          Protegido
        </span>
      </div>

      <div className="space-y-1.5">
        {STEPS.map((step, index) => {
          const done = index < activeStep;
          const active = index === activeStep;
          const Icon = step.icon;

          return (
            <div
              key={step.label}
              className={cn(
                "flex items-center gap-2.5 rounded-lg p-2.5 transition-colors duration-500",
                active && "border border-blue-400/30 bg-blue-500/20",
              )}
            >
              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-500",
                  done
                    ? "bg-emerald-500 text-white"
                    : active
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-white/30",
                )}
              >
                {done ? <Check size={12} /> : <Icon size={12} />}
              </div>

              <span
                className={cn(
                  "text-xs font-medium transition-colors duration-500",
                  done
                    ? "text-emerald-300"
                    : active
                      ? "text-white"
                      : "text-white/30",
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
        <span className="text-xs text-blue-200">Valor em custódia</span>
        <span className="font-extrabold text-white">R$ 850,00</span>
      </div>
    </div>
  );
}
