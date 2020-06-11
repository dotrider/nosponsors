//CODE FROM CART, DISPLAYBLOGS, FORUM, LOGIN COMPONENTS

//CART COMPONENT********

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            cart: []

        }
    }

    componentDidMount(){
        // console.log('C.D.M.Cart', this.getCart)
        this.getCart()

    }

    getCart = () => {
        axios.get('/api/cart').then(res => {
            // console.log('cart',res.data)
            this.setState({
                cart: res.data
            })
        })
    }

    increaseQty = (e) => {
        axios.post(`/api/cart/${e.target.value}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
   
    } 

 

    decreaseQty = (part) => {
        axios.post(`/api/carts/${part}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    // componentDidUpdate(preProps, preState){
    //     if(preState.cart !== this.state.cart){
    //         this.getCart()
    //     }
    // }

    // handleToken = () => {
    //     console.log('hit!!!', this.handleToken)
    //     const id = this.state.cart[0].cart_id
    //     axios.delete(`/api/checkout/${id}`).then(res => {
    //       console.log('res!',res)
    //       this.setState = ({
    //           cart: res.data
    //       })
    //     })  
    //     this.props.history.push('/cart')          
    //     }
    

    handleToken = async () => {
        // console.log('hit!!!', this.handleToken)
        const id = this.state.cart[0].cart_id
        const res = await axios.delete(`/api/checkout/${id}`)
          this.setState = ({
              cart: res.data
          })
      
        this.props.history.push('/merch')          
        }


    render(){
        
        // function handleToken(token, addresses){
        //     // console.log({token, addresses})
        //     alert('SUCCESS!')
        //     }

 

            // console.log('total', this.state.cart)
            const totalCart = this.state.cart.reduce((total, item) => {
                // console.log('qt',item.quantity,'price', item.price)              
                return total = total + parseInt(item.quantity) * parseInt(item.price)
            },0)    
    
       
        const mappedCart = this.state.cart.map(cart => { 
            return <div className='cartItems'>
                <div className='cartImage'><img alt='productImage' className='cartProductImg' src={cart.product_img}/></div>  
                <br/>
                <div className='productInformation'>
                <p>{cart.name}</p>
                <p><span>Price:</span> ${cart.price}</p>
                <p><span>Quantity:</span> {cart.quantity}</p> 
                </div>
                <br/>
                <div className='quantityContainer'>
                <button className='decreaseQTY' onClick={this.decreaseQty} value={cart.product_id}/>
                <button className='increaseQTY' onClick={this.increaseQty} value={cart.product_id}/>
                </div>
                </div> 
        })
        return(
            <section className='cartComponent'>
                <div className='cart-container'>
                {mappedCart} 
                <br/>
                <div className='total'> Total: <span>$</span>{totalCart}</div> 
                </div>
                <br/>
                
                <div className='stripe'>
                <StripeCheckout
                    stripeKey='pk_test_52pNzyxRFrzjtCyGvyiEkrmc00kviWNBzl'
                    token={this.handleToken}
                    billingAddress
                    shippingAddress
                    name='#NoSponsors'
                    amount={totalCart * 100}
                />
       
                </div>
                <br/>
                
            </section>
        )
    }
}

export default Cart;

//DISPLAYBLOGS COMPONENT*********

import React,{Component} from 'react';
import './DisplayBlogs.scss'
import Comments from '../Comments/Comments';
import moment from 'moment';
// import profilePic from '../../image/iconfinder_profile-filled_299075.png'
import clockPic from '../../image/iconfinder_clock_226587.png'
// import {connect} from 'react-redux';
// import {setUser} from '../../redux/reducer';
import EditBlog from '../../Components/EditBlog/EditBlog';


class DisplayBlogs extends Component{
constructor(props){
    super(props);
    this.state = {
        toggleComment: false,
        displayMenu: false,
        toggleEdit: false
    }
}

handleCommentToggle= () => {
    this.setState({
        toggleComment: !this.state.toggleComment
    })
}

toggleMenu = () => {
    this.setState({ 
        displayMenu: !this.state.displayMenu });
  }

hideMenu= () => {
    if ( this.state.displayMenu === true ) {
        this.setState({ displayMenu: false });
      }
}

handleEditToggle = () => {
    this.setState({
        toggleEdit: !this.state.toggleEdit
    })
}


    render(){
        // console.log('USER!',this.props.user)
        // console.log('My unique blog id: ', this.props.blogId)
        // console.log(this.props.title)
        const {title, blog, date, blogId, userId, username, user, profilepic} =this.props
       


        const mappedComments = this.props.comments.map(comment => {
        return  <div key={comment.comment_id} className='commentCont'>
                <div className='meta'> <p className='commentDate'>{moment(comment.post_date).format('lll')} <span className='commentUserName'>{comment.username}</span></p> 
                {user !== comment.user_id? null : <button className='deleteBtn' onClick={() => this.props.deleteComment(comment.comment_id)}/>} 
                </div>
                <div key={comment.id} className='commentsSec'> {comment.comment}</div>
         </div>
        })
        return(
          <div>
            <section className='forum-grid'>     
                <div className='userInfo'> 
                    <div className='profilePic'><img alt='profilePic' src={profilepic}/></div>
                   <p className='userData'>Username</p> 
                   <p className='userData userName'>{username}</p>     
                   <p className='userData'>Date Joinned:</p> 
                </div>

                    <div className='blogTitle'><h2>{title}<p className='date'> <img alt='clock' className='clock' src={clockPic}/> {date}</p></h2>
                    <div>{user !== userId? null : <button className='menuBtn' onClick={this.toggleMenu}/>} 
                    {this.state.displayMenu ? 
                    <div>
                    <button className='deleteBtn dltBlogBtn'onClick={()=> this.props.deleteBlog(blogId)}/> 
                    {!this.state.toggleEdit? <button onClick={this.handleEditToggle} className='editBtn' />  : <EditBlog blogId={this.props.blogId} handleToggleE={this.handleEditToggle} updateBlog={this.props.updateBlog}/>} 
                    </div> 
                    
                    : '' } 
                    </div>
                    </div> 
                    <div className='blog'>
                    {/* <div className='blogImg'><img alt='postImg' src={blogImg}/></div> */}
                   <p>{blog}</p> 
                    </div> 
               
                {!this.state.toggleComment?
                (<div className='replySect'><button onClick={this.handleCommentToggle} className='replyBtn'/></div>)
                :
                (<div className='comments'><Comments blogId={this.props.blogId} toggleComment={this.handleCommentToggle} postComment={this.props.postComment}/></div>)}
        
                <div className = 'commentsC'>
                 {mappedComments} 
                </div>
            </section>
            <hr/>
            </div>   
       
        
        )
    }
}

export default DisplayBlogs


//FORUM COMPONENT***************

import React,{Component} from 'react';
import { connect } from 'react-redux';
import { setUser, getSession} from '../../redux/reducer';
import PostBlog from '../PostBlog/PostBlog';
import axios from 'axios';
import DisplayBlogs from '../DisplayBlogs/DisplayBlogs';
import './Forum.scss' 
import moment from 'moment';



class Blogs extends Component{
 constructor(props){
     super(props);
     this.state = {
         blogs: [], 
        // From my join table - blog and comments => blogAndComments: [],
        comments:[],
        toggleBlog: false,
        edit:false
     }
     
 }

//  componentDidMount(){
    //  this.getAllBlogs()//////////
    //  this.getAllComments()/////////
    // From my join table - blog and comments => this.getBlogsAndComments()
    // this.props.getSession()/////////
    // this.props.setUser()
    // console.log('ComponentDidMount', this.props)
  
// }

 
///BLOG SECTION///
 componentDidMount() {
     this.props.getSession().then(() => {
        axios.get(`/api/blogs`).then(res => {
            this.setState({
                blogs: res.data
            })
        })
        this.getAllComments()
     }).catch(() => {
         this.props.history.push('/')
     })
} 

 postBlog = (newBlog) => {
    //  console.log(newBlog)
    //  const post_date = new Date(Date.now()).toISOString()
    axios.post('/api/blogs', newBlog).then(res => {

       this.setState({
           blogs: res.data
       })
    })
}

deleteBlog = (id) => {
    axios.delete(`/api/blogs/${id}`).then(res => {
        this.setState({
            blogs: res.data
        })
    })
}

updateBlog = (blogId, blog) => {
    // console.log('updateAxios', blogId, blog)
    axios.put( `/api/blog/${blogId}`, blog).then(res => {
        // console.log('update', res.data)
        this.setState({
            blogs: res.data
        })
    })
}

toggleEdit = () => {
    this.setState({
        edit: !this.state.edit
    })
}

///COMMENTS TO BLOG SECTION///

getAllComments = async () => {
    const comments = await axios.get('/api/comments')
    // console.log(`comment`,comments)
    this.setState({
        comments: comments.data
    })
}

postComment = async (comment) => {
    axios.post('/api/comments',comment).then( res =>{
        this.setState({
            comments: res.data
        })
    }) 
}

deleteComment = (id) => {
    // console.log('deleteComment', id)
    axios.delete(`/api/comments/${id}`).then( res => {
        this.setState({
            comments: res.data
        })
    })
       
}

// handleCommentClick = (comment, blog_id) => {
//     let body = {comment, blog_id}
//     axios.post('/api/comments', body).then( res => {
//         this.setState({
//             comments: res.data
//         })
//     })

// }
/////////////

//From my join table - blog and comments
// getBlogsAndComments = async () => {
//     const blogAndComments = await axios.get('/api/get_blog_comments')
//     console.log('blogAndComments', blogAndComments.data)
//     this.setState({
//         blogAndComments: blogAndComments.data
//     })
// }

//Moved Logout to Header
// logout = () => {
//      console.log('logout',this.logout)
//     axios.get('/auth/logout')
//     this.props.setUser({})
//     this.props.history.push('/')
//   }


handleToggle =()=> {
    this.setState({
        toggleBlog: !this.state.toggleBlog
    })
}  


render(){

    // console.log('userSession on redux', this.props.user)
    //From my join table - blog and comments
    // const mappedComments = this.state.blogAndComments.map(post => {
    //     return <DisplayBlogs key={post.id} title={post.blog_title} blog={post.blog} postComment={this.postComment}/>})
    // const mappedComments = this.state.blogAndComments.map(data => {
    //     return <div>
    //         <p>{data.blog}</p>
    //         <p>{data.comment}</p>
    //     </div>
    // })

//////////////////
// console.log("COMMENTS!", this.state.comments)
// console.log("POSTS!", this.state.blogs)

    const mappedblogs = this.state.blogs.map(post => {
        const filteredComments = this.state.comments.filter(comment => {
            return comment.blog_id === post.blog_id
        })
        // console.log('mjs', post.post_date)
        // console.log('username!', post.user_id.username)
        return <DisplayBlogs key={post.blog_id} 
        blogId={post.blog_id} 
        title={post.blog_title} 
        blog={post.blog} 
        comments={filteredComments}
        postComment={this.postComment}
        // date={post.post_date}
        date = {moment(post.post_date).format('lll')}
        deleteComment={this.deleteComment}
        deleteBlog={this.deleteBlog}
        // username={this.props.user.username}//for user session
        username={post.username}
        profilepic={post.profile_pic}
        userId = {post.user_id}
        user={this.props.user.user_id}
        updateBlog={this.updateBlog}
        blogImg={post.blog_img}
        />
        
    })
    // console.log('props', this.props.history)

    return(
       

        <section className='Mainblogs'>  
         {/* <Header logout={this.logout}/>  */}
         <div className='subHeading'>
         <h2 className='greeting'>Hello <span className=' userNameSub'>{this.props.user.username}</span></h2>
            </div>
            <div>        
                {!this.state.toggleBlog?(<div className='postBtnContainer'><button className='composeBlogBtn' onClick={this.handleToggle}>Post</button></div>)
                :
                    (<div> <PostBlog postBlog = {this.postBlog} toggle={this.handleToggle}/> </div>)}               
            </div>

        <section className='blogsAndComments'>          
            {/* From my join table - blog and comments {mappedComments} */}
            {mappedblogs}
            {/* {mappedComments} */}
         </section>
           
        </section>
    )
}

}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser,
  getSession

};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);


//LOGIN COMPONENT********

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
      profile_pic: '',
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

  // login = async (email, password) => {
  //   console.log('login',this.props.user)
  //   let body = { email, password };
  //   const res = await axios.post(`/auth/login`, body)
  //   this.props.setUser(res.data);
  //   this.props.history.push('/forum')
  // };
  
  login = (email, password) => {
    // console.log('login',this.props.user)
    let body = { email, password };
    axios.post(`/auth/login`, body).then(res => {
      this.props.setUser(res.data);
      this.props.loggedIn();
    this.props.history.push('/forum')
    }).catch(err => {
        this.setState({
          login: true
        })
      });
  }

// register = (username, email, password) => {
// let newUser = {username, email, password};
//   axios.post(`/auth/register`, newUser).then(res => {
//     this.props.setUser(res.data);
//     this.props.history.push(`/forum`)
//   }).catch(err => {
//     this.setState({
//       register: true
//     })
//   });
 
// }

  register = async (username, email, password, profile_pic) => {
    let newUser = { username, email, password, profile_pic };
    const res = await axios.post(`/auth/register`, newUser);
    this.props.setUser(res.data);
    // this.props.loggedIn();
    this.props.history.push('/forum')
  };

 

  render() {
    const { username, email, password, profile_pic, register } = this.state;
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
                this.register(username, email, password, profile_pic)
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
              <input 
                type="profile_pic"
                name="profile_pic"
                placeholder="Profile Picture"
                value={profile_pic}
                onChange={this.handleChange}
              />
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
