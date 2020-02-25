import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../redux/reducer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      register: false
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = async (email, password) => {
    console.log('login',this.props.user)
    let body = { email, password };
    const res = await axios.post(`/auth/login`, body);
    this.props.setUser(res.data);
    this.props.history.push('/blogs');
  };

  register = async (username, email, password) => {
    let newUser = { username, email, password };
    const res = await axios.post(`/auth/register`, newUser);
    this.props.setUser(res.data);
    this.props.history.push('/blogs');
  };

 

  render() {
    const { username, email, password, register } = this.state;
    console.log('user',this.props.user);
    return (
      <section>
        {!register ? (
          <div>
            <h3>Login</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.login(email, password);
              }}
            >
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <input type="submit" value="Login" />
            </form>
            {/* register button */}
            <h4>Don't have an account?</h4>
            <button
              onClick={() =>
                this.setState({
                  register: true
                })
              }
            >
              Register
            </button>
          </div>
        ) : (
          <div>
            <h3>Register</h3>
            <form onSubmit={(e) => {
                e.preventDefault()
                this.register(username, email, password)
              }}>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <input type="submit" value="Register" />
            </form>
            <h4>Already have an account</h4>
            <button
              onClick={() =>
                this.setState({
                  register: false
                })
              }
            >
              Login
            </button>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
