import React, {Component} from 'react';
import Square from './Square';
import '../stylesheets/Board.css';

class Board extends Component {
  render() {
    return (
      <div className="board_sizer">
        <div className="board_container">
          <div className="board">
            {
              (new Array(8)).fill({}).map( (el, row) => {
                return (new Array(8).fill({})).map( (el, column) => {
                  return (
                    <Square
                      key={"" + row + column}
                      row={7 - row}
                      column={column}
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

export default Board;
