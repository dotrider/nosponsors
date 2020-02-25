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
         blogAndComments: [],
         toggle: false
     }
     
 }

 componentDidMount(){
    this.getBlogsAndComments()
    this.getAllBlogs()
}
 

 getAllBlogs = async () => {
     const blogs = await axios.get(`/api/blogs`)
     console.log('blogs',blogs.data)
     this.setState({
         blogs: blogs.data,
     })
 }

////////////
 postBlog = (blog) => {
     console.log(blog)
    axios.post('/api/blogs', blog).then(res => {
       this.setState({
           blogs: res.data
       })
    })
}
/////////////

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
    this.props.setUser({})
    this.props.history.push('/')
  }


handleToggle =()=> {
    this.setState({
        toggle: !this.state.toggle
    })
}  

render(){
    const mappedComments = this.state.blogAndComments.map(data => {
        return <div>
            <p>{data.blog}</p>
            <p>{data.comment}</p>
        </div>
    })

    return(
        <div className='blogs'>   
        
            <button onClick={this.logout}>Logout</button>
                BLOGS
            <section className='blogsAndComments'>
                {!this.state.toggle?(
                <button onClick={this.handleToggle}>Post something!</button>)
                :
                (<div>
                <BlogForm postBlog = {this.postBlog} toggle={this.handleToggle}/>
                </div>)}
                
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
