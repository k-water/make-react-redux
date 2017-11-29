import React, { Component, PropTypes } from 'react'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
  render () {
    return (
      <div>
        <p>React.js</p>
        <ThemeSwitch />
      </div>
    )
  }
}

export default Content