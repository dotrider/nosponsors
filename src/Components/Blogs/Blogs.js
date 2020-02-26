import React,{Component} from 'react';
import { connect } from 'react-redux';
import { setUser} from '../../redux/reducer';
import BlogForm from '../BlogForm/BlogForm';
import axios from 'axios';
import './Blogs.css' 


class Blogs extends Component{
 constructor(){
     super();
     this.state = {
         blogs: [], 
        //  blogAndComments: [],
        comments:[],
        toggle: false
     }
     
 }

 componentDidMount(){
    // this.getBlogsAndComments()
    this.getAllBlogs()
    this.getAllComments()
}
 
///BLOG SECTION///
 getAllBlogs = async () => {
     const blogs = await axios.get(`/api/blogs`)
     console.log('blogs',blogs.data)
     this.setState({
         blogs: blogs.data
     })
 }

 postBlog = (blog) => {
     console.log(blog)
    axios.post('/api/blogs', blog).then(res => {
       this.setState({
           blogs: res.data
       })
    })
}

///COMMENTS TO BLOG SECTION///

getAllComments = async () => {
    const comments = await axios.get('/api/comments')
    console.log(`comment`,comments)
    this.setState({
        comments: comments.data
    })
}

postComment = async (comment) => {
    axios.post('/api/comments',comment)
    this.setState({
        comment: comment.data
    })
}

handleCommentClick async = (comment, blog_id) => {
    let body = {comment, blog_id}
    axios.post('/api/comments',body)

}
/////////////

// getBlogsAndComments = async () => {
//     const blogAndComments = await axios.get('/api/get_blog_comments')
//     console.log('blogAndComments', blogAndComments.data)
//     this.setState({
//         blogAndComments: blogAndComments.data
//     })
// }

logout = () => {
     console.log('logout',this.logout)
    axios.get('/auth/logout')
    this.props.setUser({})
    this.props.history.push('/')
  }


handleToggle =()=> {
    this.setState({
        toggle: !this.state.toggle
    })
}  


render(){
    // const mappedComments = this.state.blogAndComments.map(data => {
    //     return <div>
    //         <p>{data.blog}</p>
    //         <p>{data.comment}</p>
    //     </div>
    // })

    const mappedblogs = this.state.blogs.map(post => {
        return <div className='mappedblogs'>
            <h2>{post.blog_title}</h2>
            <p>{post.blog}</p><button>Reply</button></div>
    })

    const mappedComments = this.state.comments.map(comment => {
        return <div className='mappedblogs'>{comment.comment}</div>
    })

    return(
        <div className='blogs'>   
            <div>
            <button onClick={this.logout}>Logout</button>
                
                BLOGS
                {!this.state.toggle?(
                <button onClick={this.handleToggle}>Post something!</button>)
                :
                (<div>
                <BlogForm postBlog = {this.postBlog} toggle={this.handleToggle}/>
                </div>)}
                
                </div>
            <section className='blogsAndComments'>          
            {/* {mappedComments} */}
            {mappedblogs}
            <br/>
            {mappedComments}
            </section>
           </div>
    )
}

}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
