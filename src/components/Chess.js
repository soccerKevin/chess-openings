import React, {Component} from 'react'
import Board from './board'
import {Dropdown} from 'react-bootstrap';
import Player from 'models/player'
import Toggle from './toggle'

import 'stylesheets/chess.scss'

const openings = require("data/openings.json")

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

  selectOpening(e) {
    var openingId = parseInt(e.target.id)
    var opening = openings.find((o) => o.id === openingId)
    this.setState({selectedOpening: opening})
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

          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="openingDropdown"
            >
              {(this.state.selectedOpening ? this.state.selectedOpening.name : "Openings")}
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={this.selectOpening.bind(this)}>
              {
                openings.map( (opening) => {
                  return (
                    <Dropdown.Item
                      eventKey={opening.id}
                      key={opening.id}
                      id={opening.id}
                    >
                      {opening.name}
                    </Dropdown.Item>
                  )
                })
              }
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Chess
