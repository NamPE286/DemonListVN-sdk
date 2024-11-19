import { supabase } from "..";
import { client } from "..";
import { Tables } from "../types/database.types";

type TNotification = Tables<"notifications">;

export class NotificationManager {
    async listenToNewNotification(
        callbackFn: (newData: TNotification) => void
    ) {
        const user = await client.auth.getUserData();

        if (user === null) {
            throw new Error("Not logged in");
        }

        const { data, error } = await supabase
            .from("notifications")
            .select("*")
            .eq("to", user.uid)
            .order("timestamp", { ascending: false });

        if (error) {
            throw error;
        }

        supabase
            .channel("table-db-changes")
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "notifications",
                    filter: `to=eq.${user.uid}`
                },
                (payload) => {
                    callbackFn(payload.new as TNotification);
                }
            )
            .subscribe();

        return data;
    }
}
