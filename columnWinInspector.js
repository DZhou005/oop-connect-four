export class ColumnWinInspector {
  constructor(Column) {
    this.Column = Column
  }
  inspect() {
    for (let i = 0; i <= 2; i++) {
      const token1 = this.Column.getTokenAt(i)
      const token2 = this.Column.getTokenAt(i+1)
      const token3 = this.Column.getTokenAt(i+2)
      const token4 = this.Column.getTokenAt(i+3)
      if (token1 === token2 && token2 === token3 && token3 === token4 && token1 !== null) {
        return token1
      }
    }
    return 0
  }

}
