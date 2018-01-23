// redux store
export function createStore(reducer, middleware) {
  // 对createStore进行扩展
  if (middleware) {
    return middleware(createStore)(reducer)
  }
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  // 初始化 state
  dispatch({
    type: '@react/INIT'
  })
  return {
    getState,
    dispatch,
    subscribe
  }
}

// action
export function themeBlue() {
  return {
    type: 'THEME_BLUE',
    themeColor: 'blue'
  }
}

export function themeRed() {
  return {
    type: 'THEME_RED',
    themeColor: 'red'
  }
}

export function themeGreen() {
  return {
    type: 'THEME_GREEN',
    themeColor: 'green'
  }
}

export function themeGreenAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(themeGreen())
    }, 2000)
  }
}

// 参数透传
function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators, dispatch) {
  // let bound = {}
  // Object.keys(creators).forEach(v => {
  //   let creator = creators[v]
  //   bound[v] = bindActionCreator(creator, dispatch)
  // })
  // return bound
  Object.keys(creators).reduce((ret, item) => {
    ret[item] = bindActionCreator(creators[item], dispatch)
    return ret
  },{})
}

export function applyMiddleWare(middleware) {
  // args 代表 reducer
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch

    const midAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    dispatch = middleware(midAPI)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}