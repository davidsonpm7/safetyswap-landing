"use client";

import { Shield } from "lucide-react";

import { Button } from "@/shared/components/ui/Button";

interface Props {
  onCtaClick: () => void;
}

export function WaitlistHeader({ onCtaClick }: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-blue-950/80 px-4 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
            <Shield size={18} className="text-white" />
          </div>

          <h2 className="font-bold text-white">
            Safety<span className="text-cyan-300">Swap</span>
          </h2>
        </div>

        <Button size="md" variant="founder" onClick={onCtaClick}>
          Quero minha vaga
        </Button>
      </div>
    </header>
  );
}
