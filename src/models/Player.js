import King from './pieces/king'
import Queen from './pieces/queen'
import Pawn from './pieces/pawn'
import Rook from './pieces/rook'
import Knight from './pieces/knight'
import Bishop from './pieces/bishop'

class Player {
  constructor(color) {
    this.pieces = this[`${color}Pieces`]()
  }

  whitePieces() {
    return [
      new Rook(1, 1),
      new Knight(1, 2),
      new Bishop(1, 3),
      new Queen(1, 4),
      new King(1, 5),
      new Bishop(1, 6),
      new Knight(1, 7),
      new Rook(1, 8)
    ].concat(this.pawns(2)).map( (piece)=> {
      piece.color = 'white'
      return piece
    })
  }

  blackPieces() {
    return [
      new Rook(8, 1),
      new Knight(8, 2),
      new Bishop(8, 3),
      new Queen(8, 4),
      new King(8, 5),
      new Bishop(8, 6),
      new Knight(8, 7),
      new Rook(8, 8)
    ].concat(this.pawns(7)).map( (piece)=> {
      piece.color = 'black'
      return piece
    })
  }

  pawns(row) {
    return new Array(8).fill({}).map((el, i) => {
      return new Pawn(row, i + 1)
    })
  }
}


export default Player
