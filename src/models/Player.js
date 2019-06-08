import King from './pieces/King'
import Queen from './pieces/Queen'
import Pawn from './pieces/Pawn'
import Rook from './pieces/Rook'
import Knight from './pieces/Knight'
import Bishop from './pieces/Bishop'

class Player {
  constructor(color) {
    this.pieces = this[`${color}Pieces`]()
  }

  whitePieces() {
    return [
      new Rook(0, 0),
      new Knight(0, 1),
      new Bishop(0, 2),
      new Queen(0, 3),
      new King(0, 4),
      new Bishop(0, 5),
      new Knight(0, 6),
      new Rook(0, 7)
    ].concat(this.pawns(1)).map( (piece)=> {
      piece.color = 'white'
      return piece
    })
  }

  blackPieces() {
    return [
      new Rook(7, 0),
      new Knight(7, 1),
      new Bishop(7, 2),
      new Queen(7, 3),
      new King(7, 4),
      new Bishop(7, 5),
      new Knight(7, 6),
      new Rook(7, 7)
    ].concat(this.pawns(6)).map( (piece)=> {
      piece.color = 'black'
      return piece
    })
  }

  pawns(row) {
    return new Array(8).fill({}).map((el, i) => {
      return new Pawn(row, i)
    })
  }
}


export default Player;
