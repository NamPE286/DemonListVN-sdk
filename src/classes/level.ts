import { supabase } from "..";
import { Tables } from "../types/database.types";

type TLevel = Tables<"levels">;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Level extends TLevel {}

export class Level {
    constructor(obj: unknown) {
        Object.assign(this, obj);
    }
}

export class LevelFactory {
    static bind(arr: TLevel[]) {
        const res: Level[] = [];

        for (const i of arr) {
            res.push(new Level(i));
        }

        return res;
    }
}

export class LevelManager {
    async get(id: number) {
        const { data, error } = await supabase
            .from("levels")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            throw error;
        }

        return LevelFactory.bind([data])[0];
    }
}
