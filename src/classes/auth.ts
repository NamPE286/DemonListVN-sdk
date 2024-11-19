import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { client } from "..";

export class Auth extends SupabaseAuthClient {
    constructor(obj: SupabaseAuthClient) {
        super({});
        Object.assign(this, obj);
    }

    async getUserData() {
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
