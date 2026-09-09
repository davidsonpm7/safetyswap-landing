"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { leadsService } from "../services/leads.service";
import type { CreateLeadInput } from "../Waitlist.types";

export function useCreateLeadMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateLeadInput) => leadsService.create(input),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["leads-status"] });
    },
  });
}
