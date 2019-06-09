import React, {Component} from 'react'
import 'stylesheets/toggle.scss'

class Toggle extends Component {
  render() {
    return (
      <button
        className={"toggle " + (this.props.active ? 'option2' : '')}
        onClick={this.props.onClick}
      >

        <div className="toggle-primary">
          {this.props.options[0]}
        </div>

        <div className="toggle-secondary">
          {this.props.options[1]}
        </div>

      </button>
    )
  }
}

export default Toggle
