import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    loginUser: user => dispatch(loginUser(user))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
    this.setState({ email: '', password: '' });
    document.getElementById('login-register-container').className += 'hide';
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const LoginUser = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default LoginUser;
