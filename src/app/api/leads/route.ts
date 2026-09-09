import { NextResponse } from "next/server";
import { z } from "zod";

import { createLead, getLeadsStatus } from "@/shared/lib/leads-db";

export const dynamic = "force-dynamic";

const createLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/\D/g, ""))
    .refine(
      (value) => value.length >= 10 && value.length <= 13,
      "Telefone inválido",
    ),
  instagram: z
    .string()
    .trim()
    .transform((value) => value.replace(/^@/, ""))
    .refine(
      (value) => /^[a-zA-Z0-9._]{2,30}$/.test(value),
      "Instagram inválido",
    ),
  agreedRequirements: z.boolean().refine(
    (value) => value === true,
    "É necessário confirmar que vai seguir e marcar os amigos",
  ),
});

export async function GET() {
  return NextResponse.json(getLeadsStatus());
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const parsed = createLeadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation_error", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const result = createLead({
    name: parsed.data.name,
    phone: parsed.data.phone,
    instagram: parsed.data.instagram,
  });

  if (result.status === "full") {
    return NextResponse.json({ error: "slots_full" }, { status: 409 });
  }

  return NextResponse.json(
    {
      position: result.position,
      remaining: result.remaining,
      name: parsed.data.name,
      instagram: parsed.data.instagram,
    },
    { status: 201 },
  );
}
