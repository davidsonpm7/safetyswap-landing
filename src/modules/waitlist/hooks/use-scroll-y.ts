"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  let ticking = false;

  const onScroll = () => {
    if (ticking) {
      return;
    }

    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      callback();
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
}

function getSnapshot(): number {
  return window.scrollY;
}

function getServerSnapshot(): number {
  return 0;
}

export function useScrollY() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
