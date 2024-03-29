import Num from 'util/number'

class Piece {
  constructor(row, column) {
    this.column = column
    this.columnLetter = Num.numToLetter(column)
    this.row = row
    this.imgSrc = 'images/pieces.png'
  }

  name(){
    return this.constructor.name.toLowerCase()
  }
}

export default Piece;
