import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => dispatch(addUser(user))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      interests: '',
      bio: '',
      youtube: '',
      linkedin: '',
      isAdmin: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      interests,
      bio,
      youtube,
      linkedin
    } = this.state;
    this.props.addUser({
      firstName,
      lastName,
      email,
      password,
      interests,
      bio,
      youtube,
      linkedin
    });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      interests: '',
      bio: '',
      youtube: '',
      linkedin: ''
    });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      interests,
      bio,
      youtube,
      linkedin
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col m6">
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col m6">
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
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
        <div className="input-field">
          <label htmlFor="interests">Interests</label>
          <input
            type="text"
            id="interests"
            value={interests}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            value={bio}
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <div className="col m6">
            <div className="input-field">
              <label htmlFor="youtube">YouTube Channel</label>
              <input
                type="text"
                id="youtube"
                value={youtube}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col m6">
            <div className="input-field">
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input
                type="text"
                id="linkedin"
                value={linkedin}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <button className="btn" type="submit">
          Register User
        </button>
      </form>
    );
  }
}

const UserForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default UserForm;
