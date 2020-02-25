import React,{Component} from 'react';
import './BlogForm.css';



class BlogForm extends Component{
 constructor(props){
     super(props);
     this.state = {
        blog_img: '',
        blog_title: '',
        blog: ''
     }
     
 }

handleChange = (e) => {
    console.log('handleChange',e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
}

addBlog = () => {
    const {blog_img, blog_title, blog} = this.state

    let newBlog = {
        blog_img,
        blog_title,
        blog,
    }
   this.props.postBlog(newBlog)
   this.setState({
    blog_img: '',
    blog_title: '',
    blog: ''
   }) 
   this.props.toggle()
}

 
render(){
const {blog_img, blog_title, blog} = this.state
    return(
        <section className='addBlog'>   
                <h2>Post a Blog:</h2>
                <div className='blogForm'>
                <input value={blog_img} name='blog_img' placeholder='Image' onChange={this.handleChange}/>
                <input value={blog_title} name='blog_title' placeholder='Title' onChange={this.handleChange}/>
                <textarea value={blog} name='blog' placeholder='blog'onChange={this.handleChange}/>
                <br/>
                <input onClick={this.addBlog} type='submit' value="Post" />
                </div>
        </section>
    )
}

}

export default BlogForm