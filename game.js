import { Column } from "./column.js";
import { ColumnWinInspector } from "./columnWinInspector.js"

export class Game {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;

    this.currentPlayer = 1
    this.columns= [
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column()
    ]
    this.winnerNumber = 0

  }
  getName() {
    if (this.winnerNumber === 3) {
      return `${this.name1} ties with ${this.name2}`
    }

    if (this.winnerNumber === 1) {
      return `${this.name1} wins`
    }
    if (this.winnerNumber === 2) {
      return `${this.name2} wins`
    }

    return `${this.name1} vs. ${this.name2}`
  }
  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);

  }
  isColumnFull(columnIndex) {
    if(this.winnerNumber === 1 || this.winnerNumber === 2) {
      return true
    }

    return this.columns[columnIndex].isFull();

  }

  playInColumn(columnIndex) {
    this.columns[columnIndex].add(this.currentPlayer);
      this.checkForTie()
      this.checkForColumnWin()
      if (this.currentPlayer === 1) {
        this.currentPlayer = 2
      }
      else {
        this.currentPlayer = 1
      }

  }
  checkForTie(){
    if (this.columns.every(column => column.isFull())) {
      this.winnerNumber = 3
    }
  }

  checkForColumnWin () {
    if (this.winnerNumber !== 0) {
      return
    }
    for (let columnIndex = 0; columnIndex < this.columns.length; columnIndex++) {
      let column = this.columns[columnIndex]
      const inspector = new ColumnWinInspector(column)
      const winnerNumber = inspector.inspect()
      if (winnerNumber === 1 || winnerNumber === 2) {
        this.winnerNumber = winnerNumber
      }
    }
  }

}
