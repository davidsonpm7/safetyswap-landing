"use client";

import { useQuery } from "@tanstack/react-query";

import { leadsService } from "../services/leads.service";

export function useLeadsStatusQuery() {
  return useQuery({
    queryKey: ["leads-status"],
    queryFn: leadsService.getStatus,
    staleTime: 15_000,
  });
}
