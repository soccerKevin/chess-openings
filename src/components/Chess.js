import React, {Component} from 'react';
import Board from './Board';
import '../stylesheets/Chess.css';

class Chess extends Component {
  render() {
    return (
      <div className="chess">
        <Board/>
      </div>
    );
  }
}

export default Chess;
