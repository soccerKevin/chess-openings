import React, {Component} from 'react'
import 'stylesheets/piece.scss';

class Piece extends Component {
  render() {
    return (
      <figure
        className="piece"
        color={this.props.piece.color}
        name={this.props.piece.name()}
        column={this.props.piece.column}
        column_letter={this.props.piece.columnLetter}
        row={this.props.piece.row}
      >
      </figure>
    );
  }
}

export default Piece
