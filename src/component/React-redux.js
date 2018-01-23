import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from './redux'

// 高阶组件HOC
export const connect = (mapStateToProps=state=>state, mapDispatchToProps={}) => WrappedComponent => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor () {
      super()
      this.state = {
        allProps: {}
      }
    }

    componentWillMount () {
      const {
        store
      } = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps () {
      const {
        store
      } = this.context
      let stateProps = mapStateToProps(store.getState(), this.props)
      // let dispatchProps = mapDispatchToProps(store.dispatch, this.props)
      // 将action包装一层dispatch
      let dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render () {
      return <WrappedComponent {...this.state.allProps} />
    }
  }
  return Connect
}

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}