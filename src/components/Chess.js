import React, {Component} from 'react'
import Board from './board'
import Toggle from './toggle'
import Player from 'models/player'
import 'stylesheets/chess.scss'

class Chess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whitePlayer: new Player('white'),
      blackPlayer: new Player('black'),
      whiteOnBottom: true
    }
  }

  toggleWhiteOnBottom() {
    this.setState({ whiteOnBottom: !this.state.whiteOnBottom })
  }

  render() {
    return (
      <div className="chess">
        <Board
          pieces={this.state.whitePlayer.pieces.concat(this.state.blackPlayer.pieces)}
          whiteOnBottom={this.state.whiteOnBottom}
        />

        <div className="controlPanel">
          <Toggle
            options={['Standard', 'Reversed']}
            onClick={this.toggleWhiteOnBottom.bind(this)}
            active={ !this.state.whiteOnBottom }
          />
        </div>
      </div>
    );
  }
}

export default Chess;
