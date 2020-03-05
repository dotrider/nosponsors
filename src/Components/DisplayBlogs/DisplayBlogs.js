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
        toggleComment: false,
        displayMenu: false
    }
}

handleCommentToggle= () => {
    this.setState({
        toggleComment: !this.state.toggleComment
    })
}

toggleMenu = () => {
    this.setState({ displayMenu: !this.state.displayMenu });
  }

hideMenu= () => {
    if ( this.state.displayMenu === true ) {
        this.setState({ displayMenu: false });
      }
}
    render(){
        // console.log('USER!',this.props.user)
        // console.log('My unique blog id: ', this.props.blogId)
        // console.log(this.props.title)
        const {title, blog, date, blogId, userId, username, user} =this.props
       


        const mappedComments = this.props.comments.map(comment => {
        return  <div className='commentCont'>
                   <div className='meta'> <p className='commentDate'>{moment(comment.post_date).format('lll')} {this.props.username}</p> 
        {user !== comment.user_id? null : <button className='deleteBtn' onClick={() => this.props.deleteComment(comment.comment_id)}/>} 
                   </div>
                    <div key={comment.id} className='commentsSec'> {comment.comment}</div>
                </div>
        })
        return(
            <section className='forum-grid'>     
                <div className='userInfo'> UserINFO</div>
                 <div className='blogTitle'><h2>{title}{username}<p className='date'>{date}</p></h2>{user !== userId? null : <button className='menuBtn' onClick={this.toggleMenu}/>}</div> 
                 <div className="blogMenu" style={ { display: this.state.displayMenu ? 'flex' : 'none' } }>
                 <button className='deleteBtn' onClick={()=> this.props.deleteBlog(blogId)}/> 
                </div>
 
                <div className='blog'><p>{blog}</p></div> 
                <div>
                {!this.state.toggleComment?
                (<div className='replySect'><button onClick={this.handleCommentToggle} className='replyBtn'/></div>)
                :
                (<div className='comments'><Comments blogId={this.props.blogId} toggleComment={this.handleCommentToggle} postComment={this.props.postComment}/></div>)}
                </div>
                <div className = 'commentsC'>
                 {mappedComments} 
                </div>
            </section>
        )
    }
}

export default DisplayBlogs

{/* <div className="Post__master-controls">
<MasterControlIcon onClick={ this.toggleMasterMenu } />

{/* Drop-down menu. Remember that the "showMasterMenu" variable has been destructured off of this.state */}
{/* <div className="Post__master-menu" style={ { display: showMasterMenu ? 'flex' : 'none' } }>
  <span onClick={ this.showEdit }>Edit</span>
  <span>Delete</span>
</div>
</div> */} 


{/* <button className='deleteBtn' onClick={()=> this.props.deleteBlog(blogId)}/> */}
{/* onClick={()=> this.props.deleteBlog(blogId) */}

// render(){
//     // console.log('USER!',this.props.user)
//     // console.log('My unique blog id: ', this.props.blogId)
//     // console.log(this.props.title)
//     const {title, blog, date, blogId, userId, username, user} =this.props
   


//     const mappedComments = this.props.comments.map(comment => {
//     return  <div className='commentCont'>
//                <div className='meta'> <p className='font'>{moment(comment.post_date).format('lll')} {this.props.username}</p> 
//     {user !== comment.user_id? null : <button className='deleteBtn' onClick={() => this.props.deleteComment(comment.comment_id)}/>} 
//                </div>
//                 <div key={comment.id} className='commentsSec'> {comment.comment}</div>
//             </div>
//     })
//     return(
//         <section className='displayBlogsCont'>
//           <div className='blogTitle'><h2>{title}{username}<p className='date'>{date}</p></h2>{user !== userId? null : <button className='deleteBtn' onClick={()=> this.props.deleteBlog(blogId)}/>}</div> 
//             <div className='blog'><p>{blog}</p></div> 
//             <div>
//             {!this.state.toggleComment?
//             (<div className='replySect'><button onClick={this.handleCommentToggle} className='replyBtn'/></div>)
//             :
//             (<div><Comments blogId={this.props.blogId} toggleComment={this.handleCommentToggle} postComment={this.props.postComment}/></div>)}
//             </div>
//             <div>
//              {mappedComments} 
//             </div>
//         </section>
//     )
// }
// }