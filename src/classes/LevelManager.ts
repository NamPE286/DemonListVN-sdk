import { supabase } from "..";

class LevelManager {
    async getLevelByID(id: number) {
        const { data, error } = await supabase
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
