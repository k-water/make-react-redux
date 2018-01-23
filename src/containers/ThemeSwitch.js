import { connect } from 'react-redux'
import { 
  themeBlue, 
  themeRed, 
  themeGreenAsync, 
  themeTwice 
} from '../redux/redux'
import ThemeSwitch from '../component/ThemeSwitch'

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = {
  themeBlue,
  themeRed,
  themeGreenAsync,
  themeTwice
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)