import React,{Component} from 'react'
import axios from 'axios';

class Login extends Component{
 constructor(){
     super();
     this.state = {
         username: '',
         email: '',
         password: '',
         register: false
     }
     
 }

 handleChange = (e) => {
     console.log(e.target.value)
    this.setState({
        [e.target.name]:e.target.value
    })
 }



render(){
    const {username, email, password} = this.state
    return(
        <section>
            <h3>Register</h3>
            <form>
                <label>Username:</label>
                <input type='text' name='username' value={username} onChange={this.handleChange}/>
                <label>Email:</label>
                <input type='email' name='email' value={email} onChange={this.handleChange}/>
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={this.handleChange}/>
                
            </form>
        </section>
    )
}

}

export default Login