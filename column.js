import {Game} from "./game.js"

export class Column {
    constructor () {
        this.tokens=[null, null, null, null, null, null];

      }
    add (playerNumber) {
        for (let i=5; i>=0; i--) {
            if (tokens[i]===null) {
                //player number inserted
                this.tokens[i]=(playerNumber);
                break;
            }
        }
    }
    getTokenAt(rowIndex) {
        return this.tokens[rowIndex];
        //row position number
        //returns val of tokens array at index
    }

}
