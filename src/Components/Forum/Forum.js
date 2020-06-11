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
        comments:[],
        toggleBlog: false,
        edit:false
     }
     
 }

 
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

handleToggle =()=> {
    this.setState({
        toggleBlog: !this.state.toggleBlog
    })
}  


render(){
    const mappedblogs = this.state.blogs.map(post => {
        const filteredComments = this.state.comments.filter(comment => {
            return comment.blog_id === post.blog_id
        })

        return <DisplayBlogs key={post.blog_id} 
        blogId={post.blog_id} 
        title={post.blog_title} 
        blog={post.blog} 
        comments={filteredComments}
        postComment={this.postComment}
        date = {moment(post.post_date).format('lll')}
        deleteComment={this.deleteComment}
        deleteBlog={this.deleteBlog}
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
         <div className='subHeading'>
         <h2 className='greeting'>Hello <span className=' userNameSub'>{this.props.user.username}</span></h2>
            </div>
            <div>        
                {!this.state.toggleBlog?(<div className='postBtnContainer'><button className='composeBlogBtn' onClick={this.handleToggle}>Post</button></div>)
                :
                    (<div> <PostBlog postBlog = {this.postBlog} toggle={this.handleToggle}/> </div>)}               
            </div>

        <section className='blogsAndComments'>          
            {mappedblogs}
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
