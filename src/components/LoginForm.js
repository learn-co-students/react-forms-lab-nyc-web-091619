import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  // handleUsernameChange = e => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // handlePasswordChange = e => {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin(this.state.username)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              // onChange={this.handleUsernameChange}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              // onChange={this.handlePasswordChange}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
