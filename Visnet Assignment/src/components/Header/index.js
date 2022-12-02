import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="VISNET"
        className="logo"
        src="https://res.cloudinary.com/dbaekmnhf/image/upload/v1669964083/visnet_ousswv.png"
      />
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Login
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/signup">
          SignUp
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/reset">
          Reset Password
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
