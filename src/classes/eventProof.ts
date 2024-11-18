import { supabase } from "..";
import { Tables } from "../types/database.types";
import { PlayerFactory } from "./player";
import type { TPlayer } from "./player";

export type TEventProof = Tables<"eventProofs"> & {
    playerData?: TPlayer | null;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface EventProof extends TEventProof {}

export class EventProof {
    constructor(obj: unknown) {
        Object.assign(this, obj);
    }

    player() {
        if (!this.playerData) {
            throw new Error('Missing "playerData" property');
        }

        return PlayerFactory.bind([this.playerData])[0];
    }
}

export class EventProofFactory {
    static bind(arr: TEventProof[]) {
        const res: EventProof[] = [];

        for (const i of arr) {
            res.push(new EventProof(i));
        }

        return res;
    }
}

export class EventProofManager {
    async get(id: number, uid: string) {
        const { data, error } = await supabase
            .from("eventProofs")
            .select("*, playerData:players(*)")
            .match({ eventID: id, userid: uid })
            .limit(1)
            .single();

        if (error) {
            throw error;
        }

        return EventProofFactory.bind([data])[0];
    }
}
