const thunk = ({dispatch, getState}) => next => action => {
  console.log(action, typeof action)
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  // default do nothing
  return next(action)
}

export default thunk