import Manager from "./Manager";

class LevelManager extends Manager {
    async getLevelByID(id: number) {
        const { data, error } = await this.db
            .from("levels")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            throw error;
        }

        return data;
    }
}

export default LevelManager;
