import React from 'react';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.username && this.state.password)
      this.props.handleLogin(this.state);
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input
              onChange={this.changeHandler}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.changeHandler}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
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
