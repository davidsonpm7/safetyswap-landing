"use client";

import { useEffect } from "react";
import { X, PartyPopper, AlertTriangle } from "lucide-react";

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../Waitlist.constants";
import type { StoredLead } from "../Waitlist.types";
import { InstagramIcon } from "./InstagramIcon";

interface Props {
  lead: StoredLead;
  open: boolean;
  onClose: () => void;
}

export function ReinforcementPopup({ lead, open, onClose }: Props) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-sm rounded-2xl bg-card p-6 text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary"
        >
          <X size={16} />
        </button>

        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <PartyPopper size={26} className="text-emerald-600" />
        </div>

        <h3 className="mb-1 text-xl font-extrabold text-foreground">
          Vaga garantida!
        </h3>

        <p className="mb-4 text-sm text-muted-foreground">
          Você é o fundador{" "}
          <span className="font-bold text-foreground">nº {lead.position}</span>{" "}
          do SafetySwap.
        </p>

        <div className="mb-4 space-y-2 rounded-xl bg-secondary p-4 text-left text-sm text-foreground-strong">
          <p className="font-semibold text-foreground">
            Sua taxa zero pra sempre fica travada se você:
          </p>
          <p>1. Seguir @{INSTAGRAM_HANDLE} no Instagram</p>
          <p>2. Marcar 3 amigos no post de lançamento</p>
        </div>

        <div className="mb-5 flex items-start gap-2 rounded-xl border border-warning-border bg-warning-soft p-3 text-left text-xs text-warning-foreground">
          <AlertTriangle size={14} className="mt-0.5 shrink-0" />
          <span>
            Se não cumprir até o lançamento, sua vaga de fundador pode passar
            pra frente na fila.
          </span>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mb-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <InstagramIcon size={16} />
          Seguir @{INSTAGRAM_HANDLE} agora
        </a>

        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-xl px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
