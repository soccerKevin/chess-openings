import React, {Component} from 'react'
import 'stylesheets/toggle.scss'

class Toggle extends Component {
  classes() {
    var classNames = [
      'toggle',
      this.props.className,

    ]
    if(this.props.active) classNames.push('option2')
    return classNames.join(' ')
  }

  render() {
    return (
      <div className="toggleContainer">
        {
          this.props.label ? (
            <label>
              {this.props.label}
            </label>
          ) : (null)
        }

        <button
          className={this.classes()}
          onClick={this.props.onClick}
        >

          <div className="toggle-primary">
            {this.props.options[0]}
          </div>

          <div className="toggle-secondary">
            {this.props.options[1]}
          </div>

        </button>
      </div>
    )
  }
}

export default Toggle
