import path from "node:path";
import { DatabaseSync } from "node:sqlite";

export const FOUNDER_SLOTS = 10;

const DB_PATH = path.join(process.cwd(), "leads.db");

let db: DatabaseSync | null = null;

function getDb(): DatabaseSync {
  if (db) {
    return db;
  }

  const instance = new DatabaseSync(DB_PATH);

  instance.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      instagram TEXT NOT NULL,
      position INTEGER NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  db = instance;

  return instance;
}

function countLeads(database: DatabaseSync): number {
  const row = database.prepare("SELECT COUNT(*) as count FROM leads").get() as {
    count: number;
  };

  return row.count;
}

export function getLeadsStatus() {
  const count = countLeads(getDb());

  return {
    count,
    remaining: Math.max(FOUNDER_SLOTS - count, 0),
    isFull: count >= FOUNDER_SLOTS,
  };
}

export interface CreateLeadInput {
  name: string;
  phone: string;
  instagram: string;
}

export type CreateLeadResult =
  | { status: "created"; position: number; remaining: number }
  | { status: "full" };

export function createLead(input: CreateLeadInput): CreateLeadResult {
  const database = getDb();

  database.exec("BEGIN IMMEDIATE");

  try {
    const count = countLeads(database);

    if (count >= FOUNDER_SLOTS) {
      database.exec("ROLLBACK");

      return { status: "full" };
    }

    const position = count + 1;

    database
      .prepare(
        "INSERT INTO leads (name, phone, instagram, position) VALUES (?, ?, ?, ?)",
      )
      .run(input.name, input.phone, input.instagram, position);

    database.exec("COMMIT");

    return { status: "created", position, remaining: FOUNDER_SLOTS - position };
  } catch (error) {
    database.exec("ROLLBACK");

    throw error;
  }
}
