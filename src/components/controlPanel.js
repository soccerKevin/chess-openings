import React, {Component} from 'react'
import Toggle from './toggle'
import 'stylesheets/controlPanel.css'

class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Toggle options={['Standard', 'Reversed']}/>
      </div>
    )
  }
}

export default ControlPanel
