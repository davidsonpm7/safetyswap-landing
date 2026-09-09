import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-2",
    "rounded-md text-sm font-bold",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      outline:
        "border border-border bg-card text-foreground hover:bg-secondary",
      ghost:
        "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
      danger:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      success:
        "bg-success text-success-foreground shadow-sm hover:bg-success/90",
      escrow:
        "border border-info-border bg-info-soft text-info-foreground hover:bg-info-soft/80",
      founder:
        "bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/40 hover:brightness-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/50",
    },
    size: {
      sm: "h-9 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10 p-0",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
