// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogOutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="buttonContainer">
      <button type="button" onClick={onClickLogOutButton}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
