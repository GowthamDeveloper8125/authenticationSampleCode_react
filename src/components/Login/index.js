// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const onClickLoginButton = () => {
    const {history} = props
    Cookies.set('jwt_token', 'jwtToken', {expires: 30})
    return history.replace('/')
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="LoginDetails">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLoginButton}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
