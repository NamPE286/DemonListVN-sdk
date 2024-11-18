import { createClient as cc, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types/database.types";
import LevelManager from "./classes/LevelManager";
import PlayerManager from "./classes/PlayerManager";
import EventManager from "./classes/EventManager";

export let supabase: SupabaseClient<Database>;
export let APIUrl: string;

class Client {
    level: LevelManager;
    player: PlayerManager;
    event: EventManager;

    constructor() {
        this.level = new LevelManager();
        this.player = new PlayerManager();
        this.event = new EventManager();
    }
}

export function createClient(dbUrl: string, dbKey: string, apiurl: string) {
    supabase = cc<Database>(dbUrl, dbKey);
    APIUrl = apiurl;
}
