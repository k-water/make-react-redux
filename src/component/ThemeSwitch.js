import React, { Component } from 'react'
import PropTypes from 'prop-types'
class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  // handleSwitchColor (color) {
  //   if (this.props.onSwitchColor) {
  //     this.props.onSwitchColor(color)
  //   }
  // }

  // componentWillMount () {
  //   const { store } = this.context
  //   this._updateThemeColor()
  //   store.subscribe(() => this._updateThemeColor())
  // }

  // _updateThemeColor () {
  //   const {
  //     store
  //   } = this.context
  //   const state = store.getState()
  //   this.setState({
  //     themeColor: state.themeColor
  //   })
  // }

  // handleSwitchColor (color) {
  //   const {
  //     store
  //   } = this.context
  //   store.dispatch({
  //     type: 'CHANGE_COLOR',
  //     themeColor: color
  //   })
  // }

  render () {
    return (
      <div>
        <button 
          style = {{color: this.props.themeColor}}
          onClick = {this.props.themeRed}
        >
          Red
        </button>
        <button 
          style = {{color: this.props.themeColor}}
          onClick = {this.props.themeBlue}
        >
          Blue
        </button>
      </div>
    )
  }
}

export default ThemeSwitch