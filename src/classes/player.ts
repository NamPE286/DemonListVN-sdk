import { TPlayer } from "../types";

interface Player extends TPlayer {}

class Player {
    APIUrl: string;

    constructor(APIUrl: string, data: TPlayer) {
        Object.assign(this, data);
        this.APIUrl = APIUrl;
    }

    async pull() {}
}

export default Player;
