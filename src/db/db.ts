"server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";

import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("Database connection string is not defined.");
}

const pool = new Pool({
  connectionString: `${process.env.DATABASE_URL}`,
});

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// })

export const db = drizzle(pool, { schema });
