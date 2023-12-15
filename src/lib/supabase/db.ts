import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
dotenv.config({ path: "env" });
import { migrate } from "drizzle-orm/postgres-js/migrator";

if (!process.env.DATABASE_URL) {
  console.log("🔴no DATABASE_URL");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });

const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    console.log("🟠 Migratingn client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🟢 successsuflly Migrated");
  } catch (error) {
    console.log("🔴 error migrating client");
  }
};
migrateDb();
export default db;
