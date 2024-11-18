import { supabase } from "..";
import { Player, PlayerManager } from "./player";

const players = new PlayerManager();

export class Auth {
    private cachedUser: Player | undefined;

    async getUserMetadata() {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
            throw error;
        }

        return data;
    }

    async token() {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            throw error;
        }

        return data.session?.access_token;
    }

    async getUser({ force = false }) {
        if (force || this.cachedUser === undefined) {
            this.cachedUser = await players.get(
                (await this.getUserMetadata()).user.id
            );
        }

        return this.cachedUser;
    }
}
