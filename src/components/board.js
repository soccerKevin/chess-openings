import React, {Component} from 'react'
import Square from './square'
import Coordinates from './coordinates'
import 'stylesheets/board.scss'

class Board extends Component {
  findPiece(row, col) {
    return this.props.pieces.find((p) => p.column === col && p.row === row)
  }

  rowCoords() {
    var rowCoords = '87654321'.split('')
    return rowCoords = this.props.whiteOnBottom ? rowCoords : rowCoords.reverse()
  }

  columnCoords() {
    var colCoords = 'abcdefgh'.split('')
    return colCoords = this.props.whiteOnBottom ? colCoords : colCoords.reverse()
  }

  render() {
    return (
      <div className="board_sizer">
        <div className={"board_container " + (this.props.coordsOutside ? 'coordsOutside' : '')}>
          <Coordinates
            className="row"
            coordinates={this.rowCoords()}
          />
          <Coordinates
            className="column"
            coordinates={this.columnCoords()}
          />
          <div className="board">
            {
              (new Array(8)).fill({}).map( (el, r) => {
                return (new Array(8).fill({})).map( (el, c) => {
                  var row, column
                  if(this.props.whiteOnBottom) {
                    row = 8 - r
                    column = c + 1
                  } else {
                    row = r + 1
                    column = 8 - c
                  }
                  return (
                    <Square
                      showGrid={!this.props.coordsOutside}
                      key={"" + row + column}
                      row={row}
                      column={column}
                      piece={this.findPiece(row, column)}
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
