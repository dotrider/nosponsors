import React, { Component } from "react";
import axios from "axios";
import './Login.css'
import { connect } from "react-redux";
import { setUser } from "../../redux/reducer";
import Home from '../Home/Home'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      register: false,
      loginStatus: false,
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
    const res = await axios.post(`/auth/login`, body)
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
      <section className='mainCont'> 
  
        <div className='login'>
        {!register ? (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.login(email, password);
              }}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <br/>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <br/>
              <button className='loginBtn btn' type="submit" >Login</button>
              <br/>
              <button className='btn' onClick={() => this.setState({ register: true})}> Sign up</button>
            </form>  
           
          </div>
        ) : (
          <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                this.register(username, email, password)
              }}>
              <input 
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
              <br/>
              <input 
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <br/>
              <input 
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <br/>
              <button className='btn' type="submit" >Register</button> 
            </form>
            <br/>
            <h4>Already have an account</h4>
            <button className='btn'
              onClick={() =>
                this.setState({
                  register: false})}>Login</button>
          </div>
        )}
        </div>
  </section>
   
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
