import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { client } from "..";
import { Player } from "./player";

export class Auth extends SupabaseAuthClient {
    private _cachedUserData: Player | null = null;

    constructor(obj: SupabaseAuthClient) {
        super({});
        Object.assign(this, obj);
    }

    async getUserData() {
        if (this._cachedUserData !== null) {
            return this._cachedUserData;
        }

        const { data, error } = await this.getSession();

        if (error) {
            return null;
        }

        const userId = data.session?.user.id;

        if (!userId) {
            return null;
        }

        return await client.players.get(userId);
    }
}
