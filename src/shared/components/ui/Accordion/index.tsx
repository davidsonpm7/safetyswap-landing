"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/shared/utils/cn";

interface AccordionContextValue {
  openValue: string | null;
  setOpenValue: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const ItemContext = createContext<string | null>(null);

interface AccordionProps {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
}

export function Accordion({ children, className, defaultValue }: AccordionProps) {
  const [openValue, setOpenValueState] = useState<string | null>(
    defaultValue ?? null,
  );

  const setOpenValue = (value: string) => {
    setOpenValueState((current) => (current === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div
        className={cn(
          "divide-y divide-border rounded-2xl border border-border bg-card",
          className,
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <ItemContext.Provider value={value}>
      <div className={className}>{children}</div>
    </ItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const accordion = useContext(AccordionContext);
  const value = useContext(ItemContext);

  if (!accordion || value === null) {
    return null;
  }

  const isOpen = accordion.openValue === value;

  return (
    <button
      type="button"
      onClick={() => accordion.setOpenValue(value)}
      aria-expanded={isOpen}
      className={cn(
        "flex w-full items-center justify-between gap-4 p-5 text-left",
        className,
      )}
    >
      <span>{children}</span>
      <ChevronDown
        size={18}
        className={cn(
          "shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const accordion = useContext(AccordionContext);
  const value = useContext(ItemContext);

  if (!accordion || value === null) {
    return null;
  }

  const isOpen = accordion.openValue === value;

  return (
    <div
      className="grid transition-all duration-300 ease-out"
      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <p className={cn("px-5 pb-5 text-sm leading-relaxed text-muted-foreground", className)}>
          {children}
        </p>
      </div>
    </div>
  );
}
