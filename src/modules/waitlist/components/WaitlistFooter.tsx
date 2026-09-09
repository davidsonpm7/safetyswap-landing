import { Shield } from "lucide-react";

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../Waitlist.constants";
import { FadeIn } from "./FadeIn";
import { InstagramIcon } from "./InstagramIcon";

export function WaitlistFooter() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 py-10 text-slate-400">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent to-slate-900" />

      <FadeIn as="div" className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Shield size={16} className="text-white" />
            </div>
            <span className="text-lg font-extrabold text-white">
              Safety<span className="text-blue-400">Swap</span>
            </span>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-700 hover:text-white"
          >
            <InstagramIcon size={14} />@{INSTAGRAM_HANDLE}
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-slate-500 sm:mx-0 sm:text-left">
          O SafetySwap não é o canal oficial de vendas de nenhum evento,
          festival, banda ou produtora. Somos uma plataforma independente de
          intermediação segura entre compradores e vendedores de ingressos.
        </p>

        <p className="mt-4 text-center text-xs text-slate-600 sm:text-left">
          © {new Date().getFullYear()} SafetySwap. Todos os direitos
          reservados.
        </p>
      </FadeIn>
    </footer>
  );
}
