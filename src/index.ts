import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types/database.types";
import LevelManager from "./classes/LevelManager";
import PlayerManager from "./classes/PlayerManager";

export class Client {
    #db: SupabaseClient<Database>;
    #APIUrl: string;
    level: LevelManager;
    player: PlayerManager;

    constructor(dbUrl: string, dbKey: string, APIUrl: string) {
        this.#db = createClient<Database>(dbUrl, dbKey);
        this.#APIUrl = APIUrl;
        this.level = new LevelManager(this.#db, this.#APIUrl);
        this.player = new PlayerManager(this.#db, this.#APIUrl);
    }
}
