import React, {Component} from 'react';

class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnLetter: String.fromCharCode(96 + this.props.column + 1)
    }
  }

  render() {
    return (
      <div
        className="square"
        row={this.props.row + 1}
        column={this.state.columnLetter}
      >
        {this.state.columnLetter}{this.props.row + 1}
      </div>
    );
  }
}

export default Square;
