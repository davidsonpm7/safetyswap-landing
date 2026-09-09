"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/shared/utils/cn";

// Safety net apenas: se o IntersectionObserver falhar por algum motivo, o
// conteúdo garante que aparece mesmo assim. Não deve ser o gatilho normal —
// por isso é bem mais longo que o tempo de uma rolagem comum até a seção.
const FALLBACK_TIMEOUT_MS = 8000;

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section";
}

export function FadeIn({
  children,
  className,
  delayMs = 0,
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const fallback = window.setTimeout(() => setVisible(true), FALLBACK_TIMEOUT_MS);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          window.clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-10 scale-[0.97] opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
