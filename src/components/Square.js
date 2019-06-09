import React, {Component} from 'react'
import Piece from './piece'
import Num from 'util/number'
import 'stylesheets/square.scss'

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
        color={(this.props.row + this.props.column) % 2 === 0 ? 'black' : 'white' }
      >
        {
          this.props.showGrid ? (
            <label>
              {this.state.columnLetter}{this.props.row + 1}
            </label>
          ) : (null)
        }

        {
          this.props.piece ? (
            <Piece piece={this.props.piece} />
          ) : (null)
        }
      </div>
    );
  }
}

export default Square
