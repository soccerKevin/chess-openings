import React, {Component} from 'react'
import Board from './board'
import ControlPanel from './controlPanel'
import Player from 'models/player'
import 'stylesheets/chess.css'

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
        <ControlPanel/>
      </div>
    );
  }
}

export default Chess;
