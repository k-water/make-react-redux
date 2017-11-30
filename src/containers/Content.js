import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from 'react-redux'

class Content extends Component {
  static propTypes = {
    store: PropTypes.string
  }

  render () {
    return (
      <div>
        <p style = {{color: this.props.themeColor}}>React.js</p>
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateToProps)(Content)