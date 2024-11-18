import { createClient as cc, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types/database.types";
import { LevelManager } from "./classes/level";
import { EventManager } from "./classes/event";
import { PlayerManager } from "./classes/player";

export let supabase: SupabaseClient<Database>;
export let APIUrl: string;

class Client {
    events = new EventManager();
    players = new PlayerManager();
    levels = new LevelManager();
}

export function createClient(dbUrl: string, dbKey: string, apiurl: string) {
    supabase = cc<Database>(dbUrl, dbKey);
    APIUrl = apiurl;

    return new Client();
}
