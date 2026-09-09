import { Clock } from "lucide-react";

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../Waitlist.constants";

export function SlotsFullCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
        <Clock size={22} className="text-amber-600" />
      </div>

      <h3 className="mb-2 text-xl font-bold text-foreground">
        Vagas de fundador esgotadas
      </h3>

      <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
        As 10 vagas com taxa zero pra sempre já foram preenchidas. Mas calma
        — o SafetySwap estará disponível pra todo mundo em breve. Segue a
        gente pra não perder o lançamento.
      </p>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
      >
        Seguir @{INSTAGRAM_HANDLE}
      </a>
    </div>
  );
}
