import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import { createStore } from './component/redux'
import { Provider } from './component/React-redux'
import Header from './containers/Header'
import Content from './containers/Content'

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'THEME_BLUE':
      return { 
        ...state,
        themeColor: action.themeColor
      }
    case 'THEME_RED':
      return {
        ...state,
        themeColor: action.themeColor
      }
    default:
      return state
  }
}

const store = createStore(themeReducer)

class Index extends Component {
  render() {
    console.log(store.getState())
    return ( 
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render( 
  <Provider store = {store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)