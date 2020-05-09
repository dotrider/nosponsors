import React,{Component} from 'react';
import './EditBlog.scss';

class EditBlog extends Component {
    constructor(){
        super();
        this.state = {
            blog_img: '',
            blog_title: '',
            blog: ''
        }
    }

    updatedBlog = () => {
        // console.log('updateBlogClick!', this.updateBlog)
        let {blogId} = this.props
        let {blog_img, blog_title, blog} = this.state
        let updatedBlog = {
            blog_img,
            blog_title,
            blog
        };
    
        this.props.updateBlog(blogId, updatedBlog)
    
    }

    handleChange = (e) => {
        // console.log('edit', e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        // console.log('editComp',this.props.blogId)
        const {blog_img, blog_title, blog} = this.state
        return(
            <div className='editContainer'>
                 <input className='postInput' value={blog_img} name='blog_img' placeholder='Image' onChange={this.handleChange}/>
                <input className='postInput' value={blog_title} name='blog_title' placeholder='Title' onChange={this.handleChange}/>
                <input className='blogPost' value={blog} name='blog' placeholder='blog'onChange={this.handleChange}/>
             
               
                <div className='cancelCont'>
                <button className='cancelBtn' onClick={this.props.handleToggleE}/>
                <input className='submitBtn' onClick={this.updatedBlog} type='submit' value="Post" />
               </div>
            
            </div>
        )
    }
}

export default EditBlog