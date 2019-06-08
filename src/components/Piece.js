import React, {Component} from 'react'
import 'stylesheets/piece.css';

class Piece extends Component {
  render() {
    return (
      <figure
        className="piece"
        color={this.props.piece.color}
        name={this.props.piece.name()}
      >
      </figure>
    );
  }
}

export default Piece
