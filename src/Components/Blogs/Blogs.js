import React,{Component} from 'react';
import axios from 'axios';

class Blogs extends Component{
 constructor(){
     super();
     this.state = {
         blogs: [],
         comments: []
     }
     
 }

 componentDidMount(){
     this.getAllBlogs()
     this.getAllComments()
 }
 
 getAllBlogs = async () => {
     const blogs = await axios.get(`/api/get_blogs`)
     console.log('blogs',blogs.data)
     this.setState({
         blogs: blogs.data
     })
 }

 getAllComments = async () => {
     const comments = await axios.get('/api/get_comments')
     console.log('comments', comments.data)
     this.setState({
         comments: comments.data
     })
 }

 logout = () => {
     console.log('logout',this.logout)
    axios.get('/auth/logout')
    this.props.history.push('/')
  }


render(){
    const mappedBlogs = this.state.blogs.map(blog => {
        return <h1>{blog.blog}</h1>
    })

    const mappedComments = this.state.comments.map(comment => {
        return <div>{comment.comment}</div>
    })
    return(
        <div>   
            <button onClick={this.logout}>Logout</button>
                BLOGS
            {mappedBlogs}
            {mappedComments}
         

        </div>
    )
}

}

export default Blogs