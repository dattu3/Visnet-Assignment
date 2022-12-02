import {Component} from 'react'

import './index.css'

class ResetPage extends Component {
  state = {
    confirmPassword: '',
    password: '',
  }

  onConfirmPassword = event => {
    this.setState({confirmPassword: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

//Password
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
//Confirm Password
  renderConfirmPassword = () => {
    const {confirmPassword} = this.state

    return (
      <>
        <input
          type="text"
          id="ConfirmPassword"
          placeholder="ConfirmPassword"
          className="user-input"
          value={confirmPassword}
          onChange={this.onConfirmPassword}
        />
      </>
    )
  }
  render() {
    return (
      <div className="reset-app-container">
        <div className="reset-card-container">
          <form className="reset-form-container">
            <img
              src="https://res.cloudinary.com/dbaekmnhf/image/upload/v1669964071/password_bxqku6.png"
              className="password-image"
            />
            <h1 className="passwordReset">Reset your password</h1>

            <div className="input-container">{this.renderPassword()}</div>
            <div className="input-container">
              {this.renderConfirmPassword()}
              <p className="note">
                Minimum 10 characters.Must contain upper
                <br /> and lowercase,Numbers and symbols
              </p>
              <button className="login-button" type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ResetPage
