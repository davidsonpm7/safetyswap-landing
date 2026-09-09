/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        "foreground-strong": "#0b1220",
        card: "#ffffff",
        border: "#e6eaf1",
        ring: "#2563eb",
        "muted-foreground": "#64748b",
        primary: "#2563eb",
        "primary-foreground": "#ffffff",
        secondary: "#eef2f9",
        "secondary-foreground": "#0f172a",
        destructive: "#dc2626",
        "destructive-foreground": "#ffffff",
        "destructive-soft": "#fef2f2",
        success: "#059669",
        "success-foreground": "#ffffff",
        "warning-border": "#fbd38a",
        "warning-soft": "#fffaf0",
        "warning-foreground": "#92400e",
        "info-border": "#bfdbfe",
        "info-soft": "#eff6ff",
        "info-foreground": "#1d4ed8",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
