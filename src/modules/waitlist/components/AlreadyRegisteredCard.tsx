import { PartyPopper } from "lucide-react";

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../Waitlist.constants";
import type { StoredLead } from "../Waitlist.types";

interface Props {
  lead: StoredLead;
}

export function AlreadyRegisteredCard({ lead }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
        <PartyPopper size={22} className="text-emerald-600" />
      </div>

      <h3 className="mb-2 text-xl font-bold text-foreground">
        Você já garantiu sua vaga, {lead.name.split(" ")[0]}!
      </h3>

      <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
        Você é o fundador nº <strong className="text-foreground">{lead.position}</strong>{" "}
        do SafetySwap. Não esquece de seguir @{INSTAGRAM_HANDLE} e marcar 3
        amigos no post de lançamento pra travar sua taxa zero pra sempre.
      </p>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Seguir @{INSTAGRAM_HANDLE} agora
      </a>
    </div>
  );
}
