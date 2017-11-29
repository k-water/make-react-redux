import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Header from './component/Header'
import Content from './component/Content'

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />, 
  document.getElementById('root')
)
