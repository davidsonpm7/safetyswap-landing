"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { Loader2, ShieldCheck } from "lucide-react";

import { Button } from "@/shared/components/ui/Button";
import { InputController } from "@/shared/components/form/InputController";
import { CheckboxController } from "@/shared/components/form/CheckboxController/CheckboxController";
import { whatsappMask, instagramMask } from "@/shared/utils/masks";

import {
  leadFormDefaultValues,
  leadFormSchema,
  type LeadFormValues,
} from "../schemas/lead.schema";
import { INSTAGRAM_HANDLE } from "../Waitlist.constants";

interface Props {
  onSubmit: (values: LeadFormValues) => Promise<void>;
  isSubmitting: boolean;
  errorMessage?: string | null;
}

export function SignupForm({ onSubmit, isSubmitting, errorMessage }: Props) {
  const { control, handleSubmit } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: leadFormDefaultValues,
  });

  const values = useWatch({ control });
  const agreedRequirements = Boolean(values.agreedRequirements);
  const isFormComplete = leadFormSchema.safeParse(values).success;
  const canSubmit = isFormComplete && !isSubmitting;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <InputController
        control={control}
        name="name"
        label="Nome completo"
        placeholder="Como podemos te chamar?"
      />

      <InputController
        control={control}
        name="phone"
        label="WhatsApp"
        type="tel"
        placeholder="(11) 91234-5678"
        mask={whatsappMask}
      />

      <InputController
        control={control}
        name="instagram"
        label="Instagram"
        placeholder="@seu_usuario"
        mask={instagramMask}
      />

      <CheckboxController
        control={control}
        name="agreedRequirements"
        label={`Vou seguir @${INSTAGRAM_HANDLE} no Instagram e marcar 3 amigos no post de lançamento`}
        description="Isso trava sua taxa zero pra sempre como fundador. É de graça, leva 1 minuto."
      />

      {errorMessage && (
        <p className="rounded-lg bg-destructive-soft px-3 py-2 text-sm font-medium text-destructive">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        variant="founder"
        fullWidth
        disabled={!canSubmit}
        className={canSubmit ? "animate-founder-pulse" : "grayscale opacity-50"}
      >
        {isSubmitting ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <ShieldCheck size={18} />
        )}
        Garantir minha vaga de fundador
      </Button>

      {!isFormComplete && (
        <p className="text-center text-xs font-medium text-muted-foreground">
          {agreedRequirements
            ? "Preenche nome, WhatsApp e Instagram pra liberar o cadastro"
            : "Preenche tudo e marca a caixinha acima pra liberar o cadastro"}
        </p>
      )}
    </form>
  );
}
