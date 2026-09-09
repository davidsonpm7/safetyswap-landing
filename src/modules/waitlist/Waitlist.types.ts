export interface LeadsStatus {
  count: number;
  remaining: number;
  isFull: boolean;
}

export interface CreateLeadInput {
  name: string;
  phone: string;
  instagram: string;
  agreedRequirements: boolean;
}

export interface CreateLeadResponse {
  position: number;
  remaining: number;
  name: string;
  instagram: string;
}

export interface StoredLead {
  position: number;
  name: string;
  instagram: string;
}
