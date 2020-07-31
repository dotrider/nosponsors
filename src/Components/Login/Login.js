import React, { Component } from "react";
import axios from "axios";
import './Login.scss'
import { connect } from "react-redux";
import { setUser, loggedIn } from "../../redux/reducer";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      // profile_pic: '',
      register: false,
      login: false,
    };
  }

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  
  login = (email, password) => {
    // console.log('login',this.props.user)
    let body = { email, password };
    axios.post(`/auth/login`, body).then(res => {
      this.props.setUser(res.data);
      this.props.loggedIn();
    this.props.history.push('/forum')
    this.setState({
      login: true
    })
    }).catch(err => {
      console.log(err)
      });
  }


  register = async (username, email, password) => {
    let newUser = { username, email, password };
    const res = await axios.post(`/auth/register`, newUser);
    this.props.setUser(res.data);
    this.props.loggedIn();
    this.props.history.push('/forum')
  };

 

  render() {
    const { username, email, password, register } = this.state;
    // console.log('user',this.props.user);
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
                required
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <br/>
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <br/>
              <button className='loginBtn btn' type="submit" >Login</button>
              <br/>
              <button className='signupBtn btn' onClick={() => this.setState({ register: true})}> Sign up</button>
            </form>  
            <br/>
           {this.state.login?
           <p className='loginText'>Incorrect email or password</p>
          :
          <p></p>}
          </div>
        ) : (
          <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                this.register(username, email, password)
              }}>
              <input 
                required
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
              <br/>
              <input 
                required
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <br/>
              <input 
                required
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <br/>
              {/* <input 
                type="profile_pic"
                name="profile_pic"
                placeholder="Profile Picture"
                value={profile_pic}
                onChange={this.handleChange}
              /> */}
              <button className='registerBtn btn' type="submit" >Register</button> 
            </form>
       
            <br/>
            <p className='loginText'>Already have an account?</p>
            <br/>
            <div className='loginRegister'>
            <button className='loginBtn btn'
              onClick={() =>
                this.setState({
                  register: false})}>Login</button>
                  </div>
          </div>
        )}
        </div>
  </section>
   
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser,
  loggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
