import React,{Component} from 'react';
import axios from 'axios';

class Blogs extends Component{
 constructor(){
     super();
     this.state = {
         blogs: [],
         comments: [],
         blogAndComments: []
     }
     
 }

 componentDidMount(){
    //  this.getAllBlogs()
    //  this.getAllComments()
    this.getBlogsAndComments()

 }
 
//  getAllBlogs = async () => {
//      const blogs = await axios.get(`/api/get_blogs`)
//      console.log('blogs',blogs.data)
//      this.setState({
//          blogs: blogs.data
//      })
//  }

//  getAllComments = async () => {
//      const comments = await axios.get('/api/get_comments')
//      console.log('comments', comments.data)
//      this.setState({
//          comments: comments.data
//      })
//  }

getBlogsAndComments = async () => {
    const blogAndComments = await axios.get('/api/get_blog_comments')
    console.log('blogAndComments', blogAndComments.data)
    this.setState({
        blogAndComments: blogAndComments.data
    })
}

 logout = () => {
     console.log('logout',this.logout)
    axios.get('/auth/logout')
    this.props.history.push('/')
  }


render(){
    // const mappedBlogs = this.state.blogs.map(blogs => {
    //     return <div>{blogs.blog}</div>
    // })

    const mappedComments = this.state.blogAndComments.map(data => {
        return <div>
            <p>{data.blog}</p>
            <p>{data.comment}</p>
        </div>

    })
    return(
        <div>   
            <button onClick={this.logout}>Logout</button>
                BLOGS
            
            {mappedComments}
         

        </div>
    )
}

}

export default Blogs