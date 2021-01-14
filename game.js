import { Column } from "./column";

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

  }
  getName() {
    return `${this.name1} vs. ${this.name2}`
  }
  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);

  }

  playInColumn(columnIndex) {
    this.columns[columnIndex].add(this.currentPlayer);

      if (this.currentPlayer === 1) {
        this.currentPlayer = 2
      }
      else {
        this.currentPlayer = 1
      }
  }
}
