import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types/database.types";
import LevelManager from "./classes/LevelManager";
import PlayerManager from "./classes/PlayerManager";
import EventManager from "./classes/EventManager";

export class Client {
    #APIUrl: string;
    db: SupabaseClient<Database>;
    level: LevelManager;
    player: PlayerManager;
    event: EventManager;

    constructor(dbUrl: string, dbKey: string, APIUrl: string) {
        this.db = createClient<Database>(dbUrl, dbKey);
        this.#APIUrl = APIUrl;
        this.level = new LevelManager(this.db, this.#APIUrl);
        this.player = new PlayerManager(this.db, this.#APIUrl);
        this.event = new EventManager(this.db, this.#APIUrl)
    }
}
