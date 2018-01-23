import { connect } from 'react-redux'
import { themeBlue, themeRed, themeGreenAsync } from '../component/redux'
import ThemeSwitch from '../component/ThemeSwitch'

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onSwitchColor: color => {
//       dispatch({
//         type: 'CHANGE_COLOR',
//         themeColor: color
//       })
//     }
//   }
// }
const mapDispatchToProps = {
  themeBlue,
  themeRed,
  themeGreenAsync
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)