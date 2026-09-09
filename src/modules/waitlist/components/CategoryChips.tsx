"use client";

import { useState } from "react";
import { Drama, Music2, PartyPopper, Sparkles, Trophy } from "lucide-react";

import { cn } from "@/shared/utils/cn";

const CATEGORIES = [
  { label: "Shows", icon: Music2, gradient: "from-fuchsia-500 to-pink-500" },
  {
    label: "Festivais",
    icon: PartyPopper,
    gradient: "from-amber-400 to-orange-500",
  },
  { label: "Teatro", icon: Drama, gradient: "from-violet-500 to-purple-600" },
  { label: "Esportes", icon: Trophy, gradient: "from-emerald-400 to-cyan-500" },
  { label: "Festas", icon: Sparkles, gradient: "from-blue-400 to-indigo-500" },
];

export function CategoryChips() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="mb-8 flex flex-wrap gap-2.5"
      onMouseLeave={() => setHovered(null)}
    >
      {CATEGORIES.map((category, index) => {
        const isHovered = hovered === index;
        const isDimmed = hovered !== null && !isHovered;
        const Icon = category.icon;

        return (
          <button
            key={category.label}
            type="button"
            onMouseEnter={() => setHovered(index)}
            onFocus={() => setHovered(index)}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold",
              "transition-all duration-300 ease-out will-change-transform",
              isHovered
                ? cn(
                    "scale-110 border-transparent bg-gradient-to-r text-white shadow-lg",
                    category.gradient,
                  )
                : "border-white/15 bg-white/5 text-blue-100 hover:border-white/30",
              isDimmed && "scale-95 opacity-40",
            )}
          >
            <Icon
              size={13}
              className={isHovered ? "text-white" : "text-blue-300"}
            />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
