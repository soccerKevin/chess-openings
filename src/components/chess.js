import React, {Component} from 'react'
import Board from './board'
import {Dropdown, Button} from 'react-bootstrap'
import Player from 'models/player'
import Toggle from './toggle'
import Num from 'util/number'
import Slider from 'rc-slider'

import 'stylesheets/chess.scss'
import 'rc-slider/assets/index.css'

const openings = require("data/openings.json")

class Chess extends Component {
  constructor(props) {
    super(props)
    var whitePlayer = new Player('white')
    var blackPlayer = new Player('black')

    // 2624
    var firstOpening = openings.find((o) => o.id === 1325)

    this.state = {
      whitePlayer: whitePlayer,
      blackPlayer: blackPlayer,
      whiteOnBottom: true,
      coordsOutside: true,
      pieces: this.newPieces(),
      selectedOpening: firstOpening,
      moveCount: 0,
      playSpeed: 500
    }
  }

  newPieces() {
    var whitePlayer = new Player('white')
    var blackPlayer = new Player('black')
    return whitePlayer.pieces.concat(blackPlayer.pieces)
  }

  toggleWhiteOnBottom() {
    this.setState({whiteOnBottom: !this.state.whiteOnBottom})
  }

  toggleCoordsOutside() {
    this.setState({coordsOutside: !this.state.coordsOutside})
  }

  resetPieces() {
    this.setState({
      moveCount: 0,
      pieces: this.newPieces()
    })
  }

  setPlaySpeed(speed){
    // convert speed (seconds) to miliseconds
    this.setState({playSpeed: speed * 1000}, function() {
      if(this.state.playInterval) {
        // must wait unitl setState in stop() is finished
        this.stop(function(){
          this.play()
        }.bind(this))
      }
    }.bind(this))
  }

  selectOpening(e) {
    var openingId = parseInt(e.target.id)
    var opening = openings.find((o) => o.id === openingId)

    this.setState({
      selectedOpening: opening,
      moveCount: 0,
      pieces: this.newPieces()
    })
  }

  step() {
    // return if no opening to play
    if(!this.state.selectedOpening) return

    var nextMove = this.state.selectedOpening.moves.split(' ')[this.state.moveCount]

    // return if out of moves
    if(!nextMove) return false
    var fromSquare = nextMove.slice(0, 2)
    var toSquare = nextMove.slice(2)

    this.removePiece(toSquare)

    var piece = this.getPiece(fromSquare)

    this.movePiece(piece, toSquare)

    // if this is a castleing move
    if(piece.name() === 'king' && (Math.abs(Num.letterToNum(fromSquare[0]) - Num.letterToNum(toSquare[0]))) > 1) {
      // then move rook for castle
      var rook, rookToSquare;
      switch(toSquare) {
        case "c1":
          rookToSquare = "d1"
          rook = this.getPiece("a1")
          break
        case "g8":
          rookToSquare = "f8"
          rook = this.getPiece("h8")
          break
        case "c8":
          rookToSquare = "d8"
          rook = this.getPiece("a8")
          break
        case "g1":
          rookToSquare = "f1"
          rook = this.getPiece("h1")
          break
        default:
      }

      this.movePiece(rook, rookToSquare)
    }

    this.setState({
      moveCount: this.state.moveCount + 1
    })

    return true
  }

  selectRandomOpening() {
    var opening = openings[Math.floor(Math.random() * openings.length)]
    this.setState({selectedOpening: opening})
  }

  play() {
    if(this.state.playInterval) return
    var playInterval = setInterval(function() {
      if(!this.step()) {
        this.resetPieces()
        this.selectRandomOpening()
      }
    }.bind(this), this.state.playSpeed)

    this.setState({playInterval: playInterval})
  }

  stop(callback = null) {
    if(this.state.playInterval) {
      clearInterval(this.state.playInterval)
      this.setState({playInterval: null}, function() {
       if(typeof callback === "function") callback()
      })
    }
  }

  movePiece(piece, toSquare) {
    piece.columnLetter = toSquare[0]
    piece.column = Num.letterToNum(toSquare[0])
    piece.row = parseInt(toSquare[1])
  }

  getPiece(square) {
    return this.state.pieces.find((p) => {
      return (("" + p.columnLetter + p.row) === square)
    })
  }

  removePiece(square) {
    var piece = this.getPiece(square)
    if(!piece) return
    piece.columnLetter = ''
    piece.column = -1
    piece.row = -1
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

          <Button
            className="resetButton"
            onClick={this.resetPieces.bind(this)}
          >
            Reset
          </Button>

          <Button
            className="play"
            onClick={this.play.bind(this)}
          >
            <div className="triangle-right"/>
          </Button>

          <Button
            className="stop"
            onClick={this.stop.bind(this)}
          >
            <div className="icon"/>
          </Button>

          <Slider
            className="speed"
            min={.25}
            max={5}
            step={.25}
            onAfterChange={this.setPlaySpeed.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Chess
