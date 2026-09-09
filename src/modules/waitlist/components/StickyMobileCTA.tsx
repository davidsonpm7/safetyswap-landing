"use client";

import { Zap } from "lucide-react";

import { cn } from "@/shared/utils/cn";

interface Props {
  visible: boolean;
  onClick: () => void;
}

export function StickyMobileCTA({ visible, onClick }: Props) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-blue-950/95 p-3 backdrop-blur transition-all duration-300 md:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      )}
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
      }}
    >
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white shadow-lg",
          "bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600",
          visible && "animate-founder-pulse",
        )}
      >
        <Zap size={16} />
        Quero minha vaga de fundador
      </button>
    </div>
  );
}
