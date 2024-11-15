import Manager from "./Manager";

class PlayerManager extends Manager {
    async getPlayerByUID(uid: string) {
        const { data, error } = await this.db
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
