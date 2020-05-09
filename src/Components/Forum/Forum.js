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
    console.log('updateAxios', blogId, blog)
    axios.put( `/api/blog/${blogId}`, blog).then(res => {
        console.log('update', res.data)
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
        return <DisplayBlogs key={post.id} 
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
    console.log('props', this.props.history)

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
