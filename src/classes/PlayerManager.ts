import { supabase } from "..";

class PlayerManager {
    async getPlayerByUID(uid: string) {
        const { data, error } = await supabase
            .from("players")
            .select("*, clanData:clans!id(*)")
            .eq("uid", uid)
            .single();

        if (error) {
            throw error;
        }

        return data;
    }
}

export default PlayerManager;
