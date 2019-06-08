import React, {Component} from 'react'
import Piece from './Piece'
import Num from 'util/Number'

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnLetter: Num.numToLetter(props.column + 1)
    }
  }

  render() {
    return (
      <div
        className="square"
        row={this.props.row + 1}
        column={this.state.columnLetter}
      >
        <label>
          {this.state.columnLetter}{this.props.row + 1}
        </label>

        {
          this.props.piece ? (
            <Piece piece={this.props.piece} />
          ) : (
            null
          )
        }
      </div>
    );
  }
}

export default Square
