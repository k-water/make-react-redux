const arrayThunk = ({dispatch, getState}) => next => action => {
  // 如果符合检测的条件， 需要冲洗dispatch， 调用dispatch即可
  if (Array.isArray(action)) {
    return action.forEach(v => dispatch(v))
  }
  // 如果不符合，直接调用下一个中间件，使用next
  return next(action)
}

export default arrayThunk