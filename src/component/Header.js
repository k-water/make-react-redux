import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  // constructor() {
  //   super()
  //   this.state = {
  //     themeColor: ''
  //   }
  // }

  // componentWillMount() {
  //   const { 
  //     store 
  //   } = this.context
  //   this._updateThemeColor()
  //   store.subscribe(() => this._updateThemeColor())
  // }

  // _updateThemeColor() {
  //   const {
  //     store
  //   } = this.context
  //   const state = store.getState()
  //   this.setState({
  //     themeColor: state.themeColor
  //   })
  // }

  render() {
    return (
      <h1 style = {{color: this.props.themeColor}}>
        Water is learning react.
      </h1>
    )
  }
}

export default Header