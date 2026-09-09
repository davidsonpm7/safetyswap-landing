"use client";

import type { CSSProperties } from "react";

import { cn } from "@/shared/utils/cn";

import { useScrollY } from "../hooks/use-scroll-y";
import { TornTicketIcon } from "./TornTicketIcon";

interface TicketFieldProps {
  tone?: "light" | "dark";
  className?: string;
}

const TICKETS = [
  { top: "6%", left: "4%", width: 110, rotate: -16, speed: 0.05, depth: 1, duration: 6.4, delay: -1.2, floatY: 9, floatRot: 5 },
  { top: "60%", left: "85%", width: 150, rotate: 12, speed: 0.1, depth: 1.2, duration: 5.1, delay: -3.4, floatY: 12, floatRot: -6 },
  { top: "84%", left: "9%", width: 85, rotate: 18, speed: 0.03, depth: 0.65, duration: 7.6, delay: -0.6, floatY: 6, floatRot: 4 },
  { top: "16%", left: "77%", width: 65, rotate: -9, speed: 0.08, depth: 0.9, duration: 4.8, delay: -2.1, floatY: 8, floatRot: -5 },
  { top: "40%", left: "44%", width: 95, rotate: 24, speed: 0.13, depth: 1.35, duration: 6.9, delay: -4.5, floatY: 14, floatRot: 7 },
  { top: "28%", left: "58%", width: 55, rotate: -22, speed: 0.04, depth: 0.55, duration: 7.2, delay: -1.8, floatY: 7, floatRot: -4 },
  { top: "72%", left: "34%", width: 120, rotate: 8, speed: 0.11, depth: 1.1, duration: 5.6, delay: -3.9, floatY: 11, floatRot: 6 },
];

export function TicketField({ tone = "light", className }: TicketFieldProps) {
  const scrollY = useScrollY();

  const toneClass = tone === "dark" ? "text-white/[0.16]" : "text-primary/[0.07]";

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {TICKETS.map((ticket, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: ticket.top,
            left: ticket.left,
            width: ticket.width,
            height: ticket.width * (60 / 130),
            opacity: ticket.depth,
            transform: `translateY(${scrollY * ticket.speed}px)`,
            willChange: "transform",
          }}
        >
          <div
            className="ticket-float"
            style={
              {
                "--ticket-float-y": `${ticket.floatY}px`,
                "--ticket-float-rot": `${ticket.floatRot}deg`,
                animationDuration: `${ticket.duration}s`,
                animationDelay: `${ticket.delay}s`,
              } as CSSProperties
            }
          >
            <TornTicketIcon
              className={toneClass}
              style={{ transform: `rotate(${ticket.rotate}deg)` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
