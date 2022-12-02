import {Component} from 'react'

import './index.css'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    visibility: false,
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({visibility: true})
    } else {
      this.setState({visibility: false})
    }
  }
  onEnterEmail = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderEmail = () => {
    const {email} = this.state

    return (
      <>
        <input
          type="text"
          id="Email"
          placeholder="Email"
          className="user-input"
          value={email}
          onChange={this.onEnterEmail}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <input
          className="user-input"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    return (
      <div className="sign-app-container">
        <div className="sign-card-container">
          <form className="sign-form-container">
            <h1 className="sign-heading">Sign In</h1>
            <p className="sign-tag">Login to manage your account</p>
            <div className="input-container">{this.renderEmail()}</div>
            <div className="input-container">{this.renderPassword()}</div>
            <div direction="row">
              <input
                type="checkbox"
                id="checkbox"
                onChange={this.showPassword}
              />
              <label htmlFor="checkbox" cursor="pointer" className="label">
                Show Password
              </label>
            </div>
            <button className="login-button" type="submit">
              Sign In
            </button>
          </form>
        </div>
        <p className="sign-tag">Don't have an account? signup</p>
        <p className="sign-tag">Forgot password?</p>
      </div>
    )
  }
}

export default SignUp
