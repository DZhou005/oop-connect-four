


export class Column {
    constructor () {
        this.tokens=[null, null, null, null, null, null];

      }
    add (playerNumber) {
        for (let i=5; i>=0; i--) {
            if (this.tokens[i]===null) {
                //player number inserted
                this.tokens[i]=playerNumber;
                break;
            }
        }
    }
    getTokenAt(rowIndex) {
        return this.tokens[rowIndex];
        //row position number
        //returns val of tokens array at index
    }
    isFull() {
        if (this.tokens[0]!==null) {
            return true;
        }
        return false;
    }

}
