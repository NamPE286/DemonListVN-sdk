import Manager from "./Manager";

class EventManager extends Manager {
    async getOngoingEvents() {
        const cur = new Date().toISOString();
        const a = await this.db
            .from("events")
            .select("*")
            .lte("start", cur)
            .gte("end", cur)
            .order("start", { ascending: false });

        if (a.error) {
            throw a.error;
        }

        const res = a.data;
        const b = await this.db.from("events").select("*").is("end", null);

        if (b.error) {
            throw b.error;
        }

        return res.concat(b.data);
    }

    async getEvent(id: number) {
        const { data, error } = await this.db
            .from("events")
            .select("*")
            .eq("id", id)
            .limit(1)
            .single();

        if (error) {
            throw error;
        }

        return data;
    }

    async getEventProof(eventID: number, uid: string) {
        const { data, error } = await this.db
            .from("eventProofs")
            .select("*")
            .match({ eventID: eventID, userid: uid })
            .limit(1)
            .single();

        if (error) {
            throw error;
        }

        return data;
    }

    async getEventProofs(
        eventID: number | null,
        { start = 0, end = 50, accepted = "true" } = {}
    ) {
        let query = this.db
            .from("eventProofs")
            .select("*, events(*), players(*)");

        if (eventID) {
            query = query.eq("eventID", eventID);
        }

        query = query
            .eq("accepted", accepted == "true")
            .order("created_at", { ascending: true })
            .range(start, end);

        const { data, error } = await query;

        if (error) {
            throw error;
        }

        return data;
    }
}

export default EventManager;
