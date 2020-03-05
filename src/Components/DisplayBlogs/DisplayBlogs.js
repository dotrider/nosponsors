import React,{Component} from 'react';
import './DisplayBlogs.scss'
import Comments from '../Comments/Comments';
import moment from 'moment';
// import {connect} from 'react-redux';
// import {setUser} from '../../redux/reducer';


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
        // console.log('USER!',this.props.user)
        // console.log('My unique blog id: ', this.props.blogId)
        // console.log(this.props.title)
        const {title, blog, date, blogId, userId, username, user} =this.props
       


        const mappedComments = this.props.comments.map(comment => {
        return  <div className='commentCont'>
                   <div className='meta'> <p className='font'>{moment(comment.post_date).format('lll')} {this.props.username}</p> 
        {user !== comment.user_id? null : <button className='deleteBtn' onClick={() => this.props.deleteComment(comment.comment_id)}/>} 
                   </div>
                    <div key={comment.id} className='commentsSec'> {comment.comment}</div>
                </div>
        })
        return(
            <section className='displayBlogsCont'>
              <div className='blogTitle'><h2>{title}{username}<p className='date'>{date}</p></h2>{user !== userId? null : <button className='deleteBtn' onClick={()=> this.props.deleteBlog(blogId)}/>}</div> 
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

//   const mapStateToProps = state => state;

  
//   const mapDispatchToProps = {
//     setUser
//   }
  
//   export default connect(mapStateToProps, mapDispatchToProps)(DisplayBlogs);