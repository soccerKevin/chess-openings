// setupTests.js was running after tests and tests would fail
import React from 'react'
import ReactDOM from 'react-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import Chess from 'components/chess'
describe('Chess', () => {
  let chess

  describe('constructor', () => {
    beforeEach( () => {
      {chess = ReactDOM.render(<Chess />, document.createElement('div'));}
    });

    it('has 2 players who have 16 pieces', () => {
      expect(chess.state.whitePlayer.pieces.length).toEqual(16)
      expect(chess.state.blackPlayer.pieces.length).toEqual(16)
    })
  })

  describe('elements', () => {
    beforeEach( () => {
      chess = mount(<Chess />)
    })

    it('has a board', () => {
      expect(chess.exists('.board')).toEqual(true)
    })

    it('has kings', () => {
      expect(chess.find('figure.piece[name="king"]').length).toEqual(2)
    })

    it('has queens', () => {
      expect(chess.find('figure.piece[name="queen"]').length).toEqual(2)
    })

    it('has rooks', () => {
      expect(chess.find('figure.piece[name="rook"]').length).toEqual(4)
    })

    it('has bishops', () => {
      expect(chess.find('figure.piece[name="bishop"]').length).toEqual(4)
    })

    it('has knights', () => {
      expect(chess.find('figure.piece[name="knight"]').length).toEqual(4)
    })

    it('has pawns', () => {
      expect(chess.find('figure.piece[name="pawn"]').length).toEqual(16)
    })
  })

  describe('black on bottom', () => {
    beforeEach( ()=> {
      chess = mount(<Chess />)
      chess.find('.toggle.orientation').simulate('click')
    })

    it('has black pieces on the bottom', () => {
      var blackKing = chess.find("figure.piece[name='knight'][color='black']").first()
      var square = blackKing.parents('.square')
      expect(square.props().row).toEqual('8')
      expect(square.props().column).toEqual('g')
    })
  })

  describe('Coordinates', () => {
    describe('on outside', () => {
      beforeEach( ()=> {
        chess = mount(<Chess />)
      })

      it('a1 does NOT have a label', () => {
        var squareLabel = chess.find(".square[row='1'][column='a']").find('label')
        expect(squareLabel.exists()).toEqual(false)
      })

      it('standard orientation row 8 is first', () => {
        var label8 = chess.find(".coordinates.row .cell").first()
        expect(label8.text()).toEqual('8')
      })

      it('reverse orientation row 1 is first', () => {
        chess.find('.toggle.orientation').simulate('click')
        var label1 = chess.find(".coordinates.row .cell").first()
        expect(label1.text()).toEqual('1')
      })

      it('standard orientation column A is first', () => {
        var labelA = chess.find(".coordinates.column .cell").first()
        expect(labelA.text()).toEqual('a')
      })

      it('reverse orientation column H is first', () => {
        chess.find('.toggle.orientation').simulate('click')
        var labelH = chess.find(".coordinates.column .cell").first()
        expect(labelH.text()).toEqual('h')
      })
    })

    describe('on inside', () => {
      beforeEach( ()=> {
        chess = mount(<Chess />)
        chess.find('.toggle.coordinates').simulate('click')
      })

      it('a1 has a label', () => {
        var squareLabel = chess.find(".square[row='1'][column='a']").find('label').text()
        expect(squareLabel).toEqual('a1')
      })
    })
  })
})
