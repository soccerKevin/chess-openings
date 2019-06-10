import React, {Component} from 'react'
import Board from './board'
import {Dropdown, Button} from 'react-bootstrap';
import Player from 'models/player'
import Toggle from './toggle'
import Num from 'util/number'

import 'stylesheets/chess.scss'

const openings = require("data/openings.json")

class Chess extends Component {
  constructor(props) {
    super(props)
    var whitePlayer = new Player('white')
    var blackPlayer = new Player('black')

    var firstOpening = openings.find((o) => o.id === 2994)

    this.state = {
      whitePlayer: whitePlayer,
      blackPlayer: blackPlayer,
      whiteOnBottom: true,
      coordsOutside: true,
      pieces: whitePlayer.pieces.concat(blackPlayer.pieces),
      selectedOpening: firstOpening,
      moveCount: 0
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

    this.setState({
      selectedOpening: opening,
      moveCount: 0
    })
  }

  step() {
    // return if no opening to play
    if(!this.state.selectedOpening) return

    var pieces = this.state.pieces
    var nextMove = this.state.selectedOpening.moves.split(' ')[this.state.moveCount]

    // return if out of moves
    if(!nextMove) return
    var fromSquare = nextMove.slice(0, 2)
    var toSquare = nextMove.slice(2)

    var piece = pieces.find((p) => {
      return (("" + p.columnLetter + p.row) === fromSquare)
    })

    piece.columnLetter = toSquare[0]
    piece.column = Num.letterToNum(toSquare[0])
    piece.row = parseInt(toSquare[1])

    this.setState({
      pieces: pieces,
      moveCount: this.state.moveCount + 1
    })
  }

  render() {
    return (
      <div className="chess">
        <Board
          pieces={this.state.pieces}
          whiteOnBottom={this.state.whiteOnBottom}
          coordsOutside={this.state.coordsOutside}
        />

        <div className="controlPanel">
          <div className="orientationCoords">
            <Toggle
              className='orientation'
              label='Board Orientation'
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

          <Button
            className="stepButton"
            onClick={this.step.bind(this)}
          >
            Step
          </Button>
        </div>
      </div>
    );
  }
}

export default Chess
