import React,{Component} from 'react';
import './PostBlog.css';



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
    const post_date = new Date(Date.now()).toISOString()
    let newBlog = {
        blog_img,
        blog_title,
        blog,
        post_date
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

        <section className='composeBlog'>   
                <div className='blogContent'>
                <input className='postInput' value={blog_img} name='blog_img' placeholder='Image' onChange={this.handleChange}/>
                <input className='postInput' value={blog_title} name='blog_title' placeholder='Title' onChange={this.handleChange}/>
                <input className='postInput blogPost' value={blog} name='blog' placeholder='blog'onChange={this.handleChange}/>
                <input className='submitBtn' onClick={this.addBlog} type='submit' value="Post" />
                </div>
                <div className='cancelCont'>
                <button className='cancelBtn' onClick={this.props.toggle}/>
                </div>
        </section>

       

    )
}

}

export default BlogForm