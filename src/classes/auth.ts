import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { client } from "..";
import { APIUrl } from "..";
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

        try {
            return await client.players.get(userId);
        } catch {
            const { data, error } = await this.getUser();

            if (error) {
                throw error;
            }

            await fetch(`${APIUrl}/player`, {
                method: "PUT",
                body: JSON.stringify({
                    name: data.user.user_metadata.full_name
                }),
                headers: {
                    Authorization: `Bearer ${(await this.getSession()).data.session?.access_token}`,
                    "Content-Type": "application/json"
                }
            });

            return await client.players.get(userId);
        }
    }
}
