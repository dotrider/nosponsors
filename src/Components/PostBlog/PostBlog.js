import React,{Component} from 'react';
import './PostBlog.scss';



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
    // console.log('handleChange',e.target.value)
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
            
                <input className='postInput' value={blog_img} name='blog_img' placeholder='Image' onChange={this.handleChange}/>
                <input className='postInput' value={blog_title} name='blog_title' placeholder='Title' maxlength="40" onChange={this.handleChange}/>
                <input className='blogPost' value={blog} name='blog' placeholder='blog'onChange={this.handleChange}/>
             
               
                <div className='cancelCont'>
                <button className='cancelBtn' onClick={this.props.toggle}/>
                <input className='submitBtn' onClick={this.addBlog} type='submit' value="Post" />
                </div>
        </section>

       

    )
}

}

export default BlogForm