import React, {Component} from 'react'
import Square from './square'
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
    return (
      <div className="board_sizer">
        <div className="board_container">
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
