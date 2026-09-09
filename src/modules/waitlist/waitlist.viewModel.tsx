"use client";

import { useEffect, useRef, useState } from "react";

import { useLeadsStatusQuery } from "./queries/use-leads-status.query";
import { useCreateLeadMutation } from "./mutations/use-create-lead.mutation";
import { useLeadStorage } from "./hooks/use-lead-storage";
import { useSectionVisibility } from "./hooks/use-section-visibility";
import { FOUNDER_SLOTS } from "./Waitlist.constants";
import { SlotsFullError } from "./services/leads.service";
import type { LeadFormValues } from "./schemas/lead.schema";

export function useWaitlistViewModel() {
  const statusQuery = useLeadsStatusQuery();
  const createLeadMutation = useCreateLeadMutation();
  const { lead, saveLead } = useLeadStorage();
  const { ref: signupRef, isVisible: isSignupVisible } =
    useSectionVisibility<HTMLDivElement>(0.2);

  const [popupOpen, setPopupOpen] = useState(false);
  const hasAutoOpenedPopup = useRef(false);

  useEffect(() => {
    if (lead && !hasAutoOpenedPopup.current) {
      hasAutoOpenedPopup.current = true;
      setPopupOpen(true);
    }
  }, [lead]);

  const scrollToSignup = () => {
    document
      .getElementById("cadastro")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (values: LeadFormValues) => {
    const result = await createLeadMutation.mutateAsync({
      name: values.name,
      phone: values.phone,
      instagram: values.instagram,
      agreedRequirements: values.agreedRequirements,
    });

    saveLead({
      position: result.position,
      name: result.name,
      instagram: result.instagram,
    });

    setPopupOpen(true);
  };

  const submitError = createLeadMutation.error
    ? createLeadMutation.error instanceof SlotsFullError
      ? "As vagas de fundador acabaram de esgotar. Fica de olho no Instagram pro próximo lote."
      : "Não deu pra confirmar seu cadastro agora. Tenta de novo em instantes."
    : null;

  return {
    count: statusQuery.data?.count ?? 0,
    total: FOUNDER_SLOTS,
    isFull: statusQuery.data?.isFull ?? false,
    lead,
    signupRef,
    isSignupVisible,
    scrollToSignup,
    handleSubmit,
    isSubmitting: createLeadMutation.isPending,
    submitError,
    popupOpen,
    closePopup: () => setPopupOpen(false),
  };
}
