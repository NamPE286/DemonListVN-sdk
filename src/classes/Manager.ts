import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../types/database.types";

class Manager {
    db: SupabaseClient<Database>;
    APIUrl: string;

    constructor(db: SupabaseClient<Database>, APIUrl: string) {
        this.APIUrl = APIUrl;
        this.db = db;
    }
}

export default Manager;
