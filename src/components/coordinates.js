import React, {Component} from 'react'

class Coordinates extends Component {
  render() {
    return (
      <div className={"coordinates " + this.props.className }>
        {
          this.props.coordinates.map( (coord) => {
            return (
              <div
                className='cell'
                key={coord}
              >
                { coord }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Coordinates
