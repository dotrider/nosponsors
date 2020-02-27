import React,{Component} from 'react';
import './DisplayBlogs.css'
import Comments from '../Comments/Comments';

class DisplayBlogs extends Component{
constructor(props){
    super(props);
    this.state = {
        toggleComment: false
    }
}
handleCommentToggle= () => {
    this.setState({
        toggleComment: !this.state.toggleComment
    })
}
    render(){
        console.log('My unique blog id: ', this.props.blogId)
        // console.log(this.props.title)
        const {title, blog, date, blogId} =this.props
       

        const mappedComments = this.props.comments.map(comment => {
        return  <div className='commentCont'>
                   <div className='meta'> <p className='font'>{comment.post_date} </p> 
                    <button className='deleteBtn' onClick={() => this.props.deleteComment(comment.comment_id)}/> 
                   </div>
                    <div key={comment.id} className='commentsSec'> {comment.comment}</div>
                </div>
        })
        return(
            <section className='displayBlogsCont'>
              <div className='blogTitle'><h2>{title}<p className='date'>{date}</p></h2><button className='deleteBtn' onClick={()=> this.props.deleteBlog(blogId)}/></div> 
                <div className='blog'><p>{blog}</p></div> 
                <div>
                {!this.state.toggleComment?
                (<div className='replySect'><button onClick={this.handleCommentToggle} className='replyBtn'/></div>)
                :
                (<div><Comments blogId={this.props.blogId} toggleComment={this.handleCommentToggle} postComment={this.props.postComment}/></div>)}
                </div>
                <div>
                 {mappedComments} 
                </div>
            </section>
        )
    }
}


export default DisplayBlogs
