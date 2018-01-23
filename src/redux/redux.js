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

export function themeTwice() {
  return [{
    type: 'THEME_RED',
    themeColor: 'red'
  }, themeGreenAsync()]
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
/**
 * 
 * @param {function} funcs
 * compose(fn1, fn2, fn3)
 * => fn1(fn2(fn3)) 
 */
export function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((ret, item) => (...args) => ret(item(...args)))
}

export function applyMiddleWare(...middlewares) {
  // args 代表 reducer
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch

    const midAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    // 单个中间件
    // dispatch = middleware(midAPI)(store.dispatch)
    // 多个中间件
    const middlewareChain = middlewares.map(middleware => middleware(midAPI))
    dispatch = compose(...middlewareChain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}