import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    visibility: false,
  }

  termsAndConditions = event => {
    if (event.target.checked) {
      this.setState({visibility: true})
    } else {
      this.setState({visibility: false})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
//Email
  renderEmailField = () => {
    const {email} = this.state
    return (
      <>
        <input
          type="text"
          id="email"
          className="input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }

//Username
  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <input
          type="text"
          id="username"
          className="input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }
//Password
  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <input
          type="password"
          id="password"
          className="input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }
  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/dbaekmnhf/image/upload/v1669964060/login_nqw3az.png"
          className="login-image"
          alt="login logo"
        />
        <form className="form-container">
          <h1 className="heading">Create your account</h1>
          <p className="tag">Created for developers by developers</p>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div direction="row">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.termsAndConditions}
            />
            <label htmlFor="checkbox" cursor="pointer" className="label">
              I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="login-button">
            Create my account
          </button>
          <p className="tag">Already have an account? Sign in</p>
        </form>
      </div>
    )
  }
}

export default Login
