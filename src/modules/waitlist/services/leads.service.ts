import type {
  CreateLeadInput,
  CreateLeadResponse,
  LeadsStatus,
} from "../Waitlist.types";

export class SlotsFullError extends Error {
  constructor() {
    super("slots_full");
    this.name = "SlotsFullError";
  }
}

export const leadsService = {
  async getStatus(): Promise<LeadsStatus> {
    const response = await fetch("/api/leads", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("failed_to_fetch_status");
    }

    return response.json();
  },

  async create(input: CreateLeadInput): Promise<CreateLeadResponse> {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (response.status === 409) {
      throw new SlotsFullError();
    }

    if (!response.ok) {
      throw new Error("failed_to_create_lead");
    }

    return response.json();
  },
};
