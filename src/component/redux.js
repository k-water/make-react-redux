// redux store
export function createStore(reducer) {
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