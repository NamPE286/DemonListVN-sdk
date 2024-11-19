import { createClient as cc, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types/database.types";
import { LevelManager } from "./classes/level";
import { EventManager } from "./classes/event";
import { PlayerManager } from "./classes/player";
import { Auth } from "./classes/auth";

export let supabase: SupabaseClient<Database>;
export let APIUrl: string;

class Client {
    auth = new Auth(supabase.auth);
    events = new EventManager();
    players = new PlayerManager();
    levels = new LevelManager();
}

export let client: Client | undefined = undefined;

export function createClient(dbUrl: string, dbKey: string, apiurl: string) {
    if (client !== undefined) {
        return client;
    }

    supabase = cc<Database>(dbUrl, dbKey);
    APIUrl = apiurl;
    client = new Client();

    return client;
}
