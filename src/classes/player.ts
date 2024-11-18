import { supabase } from "..";
import { Tables } from "../types/database.types";

export type TPlayer = Tables<"players"> & {
    clanData?: Tables<"clans">;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Player extends TPlayer {}

export class Player {
    constructor(obj: unknown) {
        Object.assign(this, obj);
    }
}

export class PlayerFactory {
    static async create(uid: string) {
        const { data, error } = await supabase
            .from("players")
            .select("*, clanData:clans!id(*)")
            .eq("uid", uid)
            .single();

        if (error) {
            throw error;
        }

        return new Player(data);
    }

    static bind(arr: Player[]) {
        const res: Player[] = [];

        for (const i of arr) {
            res.push(new Player(i));
        }

        return res;
    }
}

export class PlayerManager {
    async get(uid: string) {
        return await PlayerFactory.create(uid);
    }
}
