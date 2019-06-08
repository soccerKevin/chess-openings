import React, {Component} from 'react';
import Board from './Board';
import Player from 'models/Player'
import 'stylesheets/Chess.css';

class Chess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whitePlayer: new Player('white'),
      blackPlayer: new Player('black')
    }
  }

  render() {
    return (
      <div className="chess">
        <Board
          pieces={this.state.whitePlayer.pieces.concat(this.state.blackPlayer.pieces)}
        />
      </div>
    );
  }
}

export default Chess;
