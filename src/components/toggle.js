import React, {Component} from 'react'
import 'stylesheets/toggle.css'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  clickHandler() {
    this.setState({ active: !this.state.active }, () => {
      if (this.props.onClick){this.props.onClick()}
    })
  }

  render() {
    return (
      <button className={"toggle " + (this.state.active ? 'option2' : '')} onClick={this.clickHandler.bind(this)}>

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
