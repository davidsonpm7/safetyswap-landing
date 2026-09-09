interface Props {
  count: number;
  total: number;
}

export function SlotsProgressBar({ count, total }: Props) {
  const percentage = Math.min((count / total) * 100, 100);
  const remaining = Math.max(total - count, 0);

  return (
    <div className="w-full max-w-sm">
      <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-blue-100">
        <span>
          {count} de {total} vagas de fundador preenchidas
        </span>
        <span>{remaining > 0 ? `${remaining} restantes` : "Esgotado"}</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/15">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
