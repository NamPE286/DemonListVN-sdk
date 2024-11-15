import { TPlayer } from "../types";

/* eslint-disable */
interface Player extends TPlayer {}

class Player {
    /* eslint-enable */

    APIUrl: string;

    constructor(APIUrl: string, data: TPlayer) {
        Object.assign(this, data);
        this.APIUrl = APIUrl;
    }
}

export default Player;
