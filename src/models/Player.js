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
      new Rook('a', '1'),
      new Knight('a', '2'),
      new Bishop('a', '3'),
      new Queen('a', '4'),
      new King('a', '5'),
      new Bishop('a', '6'),
      new Knight('a', '7'),
      new Rook('a', '8')
    ].concat(this.pawns('b'))
  }

  blackPieces() {
    return [
      new Rook('h', '1'),
      new Knight('h', '2'),
      new Bishop('h', '3'),
      new Queen('h', '4'),
      new King('h', '5'),
      new Bishop('h', '6'),
      new Knight('h', '7'),
      new Rook('h', '8')
    ].concat(this.pawns('g'))
  }

  pawns(row) {
    return new Array(8).fill({}).map((el, i) => {
      return new Pawn(row, i + 1)
    })
  }
}


export default Player;
