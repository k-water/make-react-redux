import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleWare } from './redux/redux'
import { Provider } from './redux/react-redux/react-redux'
import thunk from './redux/middleware/redux-thunk'
import arrayThunk from './redux/middleware/redux-array'
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
    case 'THEME_GREEN':
      return {
        ...state,
        themeColor: action.themeColor
      }
    default:
      return state
  }
}

const store = createStore(themeReducer, applyMiddleWare(thunk, arrayThunk))

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