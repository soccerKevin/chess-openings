import Num from 'util/Number'

class Piece {
  constructor(column, row) {
    this.column = column
    this.columnLetter = Num.numToLetter(column + 1)
    this.row = row
    this.imgSrc = 'images/pieces.png'
  }
}

export default Piece;
