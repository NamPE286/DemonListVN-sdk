import { TLevel } from "../types";

interface Level extends TLevel {}

class Level {
    APIUrl: string;

    constructor(APIUrl: string, data: TLevel) {
        Object.assign(this, data);
        this.APIUrl = APIUrl;
    }

    async pull() {
        if (!this.id) {
            throw new Error('Missing "id" property');
        }

        try {
            const data = await (
                await fetch(`${this.APIUrl}/level/${this.id}`)
            ).json();

            return new Level(this.APIUrl, data);
        } catch (err) {
            throw err;
        }
    }
}

export default Level;
