import { TLevel } from "../types";

/* eslint-disable */
interface Level extends TLevel {}

class Level {
    /* eslint-enable */

    APIUrl: string;

    constructor(APIUrl: string, data: TLevel) {
        Object.assign(this, data);
        this.APIUrl = APIUrl;
        console.log(this.APIUrl);
    }

    async pull(): Promise<Level> {
        if (!this.id) {
            throw new Error('Missing "id" property');
        }

        const data = await (
            await fetch(`${this.APIUrl}/level/${this.id}`)
        ).json();

        return new Level(this.APIUrl, data);
    }
}

export default Level;
