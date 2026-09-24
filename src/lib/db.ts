import { neon } from "@neondatabase/serverless";

const databaseUrl =
  process.env.DATABASE_URL || process.env.DATABASE_URL_UNPOOLED || "";

if (!databaseUrl) {
  console.warn("DATABASE_URL is not defined in environment variables.");
}

export const sql = neon(databaseUrl);
export default sql;
