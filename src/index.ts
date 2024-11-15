import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Level from "./classes/level";

export class Client {
  db: SupabaseClient;
  APIUrl: string;

  async getLevel(id: number) {
    const level = new Level(this.APIUrl, { id: id });
    return level.pull();
  }

  constructor(dbUrl: string, dbKey: string, APIUrl: string) {
    this.db = createClient(dbUrl, dbKey);
    this.APIUrl = APIUrl;
  }
}
