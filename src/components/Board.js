import React, {Component} from 'react'
import Square from './square'
import Coordinates from './coordinates'
import 'stylesheets/board.scss'

class Board extends Component {
  constructor(props) {
    super(props)

    var pieces = new Array(8).fill({}).map(() => new Array(8).fill(null))

    props.pieces.forEach( (piece) => {
      pieces[piece.row][piece.column] = piece
    })

    this.state = {
      pieces: pieces
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="board_sizer">
        <div className={"board_container " + (this.props.coordsOutside ? 'coordsOutside' : '')}>
          <Coordinates
            className="row"
            coordinates={'12345678'.split('')}
          />
          <Coordinates
            className="column"
            coordinates={'abcdefgh'.split('')}
          />
          <div className="board">
            {
              (new Array(8)).fill({}).map( (el, r) => {
                return (new Array(8).fill({})).map( (el, c) => {
                  var row, column;
                  if(this.props.whiteOnBottom) {
                    row = 7 - r
                    column = c
                  } else {
                    row = r
                    column = 7 - c
                  }
                  return (
                    <Square
                      showGrid={!this.props.coordsOutside}
                      key={"" + row + column}
                      row={row}
                      column={column}
                      piece={this.state.pieces[row][column]}
                    />
                  )
                })
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Board
