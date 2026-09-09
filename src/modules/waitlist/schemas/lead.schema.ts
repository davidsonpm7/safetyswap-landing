import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Digite seu nome completo"),
  phone: z
    .string()
    .trim()
    .refine((value) => value.replace(/\D/g, "").length >= 10, "Digite um WhatsApp válido"),
  instagram: z
    .string()
    .trim()
    .refine(
      (value) => value.replace(/^@/, "").length >= 2,
      "Digite seu @ do Instagram",
    ),
  agreedRequirements: z
    .boolean()
    .refine(
      (value) => value === true,
      "Confirme que vai seguir e marcar os amigos",
    ),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const leadFormDefaultValues: LeadFormValues = {
  name: "",
  phone: "",
  instagram: "",
  agreedRequirements: false,
};
