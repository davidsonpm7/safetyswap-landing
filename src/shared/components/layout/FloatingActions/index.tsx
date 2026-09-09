"use client";

import { usePathname } from "next/navigation";

import { FloatingActionsView } from "./FloatingActions.view";
import { useFloatingActionsViewModel } from "./useFloatingActions.viewModel";

export default function FloatingActions() {
  const pathname = usePathname();
  const viewModelProps = useFloatingActionsViewModel();

  if (pathname === "/") {
    return null;
  }

  return <FloatingActionsView {...viewModelProps} />;
}

export * from "./FloatingActions.types";
