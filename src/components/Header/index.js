// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="HeaderContainer">
    <Link to="/">
      <p className="Homepara">Home</p>
    </Link>
    <Link to="/about">
      <p>About</p>
    </Link>
  </div>
)

export default Header
