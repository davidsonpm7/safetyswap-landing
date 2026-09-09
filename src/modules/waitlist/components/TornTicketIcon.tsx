interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export function TornTicketIcon({ className, style }: Props) {
  return (
    <svg
      viewBox="0 0 130 60"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="124"
        height="54"
        rx="14"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.06"
      />

      <line
        x1="90"
        y1="10"
        x2="90"
        y2="50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="0.5 7"
      />

      <line
        x1="20"
        y1="22"
        x2="70"
        y2="22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="31"
        x2="58"
        y2="31"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="40"
        x2="65"
        y2="40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx="107" cy="30" r="11" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M102 30 L105.5 33.5 L113 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
