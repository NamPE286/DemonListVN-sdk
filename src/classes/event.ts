import { supabase } from "..";
import { Tables } from "../types/database.types";
import { EventProofManager } from "./eventProof";

export type TEvent = Tables<"events">;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Event extends TEvent {}

export class Event {
    constructor(obj: unknown) {
        Object.assign(this, obj);
    }

    async getProof(uid: string) {
        return new EventProofManager().get(this.id, uid);
    }
}

export class EventFactory {
    static async create(id: number) {
        const { data, error } = await supabase
            .from("events")
            .select("*")
            .eq("id", id)
            .limit(1)
            .single();

        if (error) {
            throw error;
        }

        return new Event(data);
    }

    static bind(arr: Tables<"events">[]) {
        const res: Event[] = [];

        for (const i of arr) {
            res.push(new Event(i));
        }

        return res;
    }
}

export class EventManager {
    async getOngoingEvents() {
        const cur = new Date().toISOString();
        const a = await supabase
            .from("events")
            .select("*")
            .lte("start", cur)
            .gte("end", cur)
            .order("start", { ascending: false });

        if (a.error) {
            throw a.error;
        }

        let dat = a.data;
        const b = await supabase.from("events").select("*").is("end", null);

        if (b.error) {
            throw b.error;
        }

        dat = dat.concat(b.data);

        return EventFactory.bind(dat);
    }

    async get(id: number) {
        return await EventFactory.create(id);
    }
}
