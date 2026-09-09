"use client";

import { useCallback, useSyncExternalStore } from "react";

import type { StoredLead } from "../Waitlist.types";

const STORAGE_KEY = "safetyswap:lead";
const LOCAL_CHANGE_EVENT = "safetyswap:lead-storage-changed";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LOCAL_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LOCAL_CHANGE_EVENT, callback);
  };
}

function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): string | null {
  return null;
}

function parseLead(raw: string | null): StoredLead | null {
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as StoredLead;
  } catch {
    return null;
  }
}

export function useLeadStorage() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const saveLead = useCallback((value: StoredLead) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      // localStorage indisponível (modo privado, etc.) — segue sem estado salvo
    }

    window.dispatchEvent(new Event(LOCAL_CHANGE_EVENT));
  }, []);

  return { lead: parseLead(raw), saveLead };
}
