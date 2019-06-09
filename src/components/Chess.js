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
      whiteOnBottom: true,
      coordsOutside: true
    }
  }

  toggleWhiteOnBottom() {
    this.setState({whiteOnBottom: !this.state.whiteOnBottom})
  }

  toggleCoordsOutside() {
    this.setState({coordsOutside: !this.state.coordsOutside})
  }

  render() {
    return (
      <div className="chess">
        <Board
          pieces={this.state.whitePlayer.pieces.concat(this.state.blackPlayer.pieces)}
          whiteOnBottom={this.state.whiteOnBottom}
          coordsOutside={this.state.coordsOutside}
        />

        <div className="controlPanel">
          <div className="orientationCoords">
            <Toggle
              className='orientation'
              label="Board Orientation"
              options={['Standard', 'Reversed']}
              onClick={this.toggleWhiteOnBottom.bind(this)}
              active={!this.state.whiteOnBottom}
            />
            <Toggle
              label="Coordinate Placement"
              className='coordinates'
              options={['Outside', 'Inside']}
              onClick={this.toggleCoordsOutside.bind(this)}
              active={!this.state.coordsOutside}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chess
