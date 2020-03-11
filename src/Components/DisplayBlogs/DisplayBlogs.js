import React,{Component} from 'react';
import './DisplayBlogs.scss'
import Comments from '../Comments/Comments';
import moment from 'moment';
// import profilePic from '../../image/iconfinder_profile-filled_299075.png'
import clockPic from '../../image/iconfinder_clock_226587.png'
// import {connect} from 'react-redux';
// import {setUser} from '../../redux/reducer';
import EditBlog from '../../Components/EditBlog/EditBlog';


class DisplayBlogs extends Component{
constructor(props){
    super(props);
    this.state = {
        toggleComment: false,
        displayMenu: false,
        toggleEdit: false
    }
}

handleCommentToggle= () => {
    this.setState({
        toggleComment: !this.state.toggleComment
    })
}

toggleMenu = () => {
    this.setState({ 
        displayMenu: !this.state.displayMenu });
  }

hideMenu= () => {
    if ( this.state.displayMenu === true ) {
        this.setState({ displayMenu: false });
      }
}

handleEditToggle = () => {
    this.setState({
        toggleEdit: !this.state.toggleEdit
    })
}


    render(){
        // console.log('USER!',this.props.user)
        // console.log('My unique blog id: ', this.props.blogId)
        // console.log(this.props.title)
        const {title, blog, date, blogId, userId, username, user, profilepic, blogImg} =this.props
       


        const mappedComments = this.props.comments.map(comment => {
        return  <div className='commentCont'>
                <div className='meta'> <p className='commentDate'>{moment(comment.post_date).format('lll')} <span className='commentUserName'>{comment.username}</span></p> 
                {user !== comment.user_id? null : <button className='deleteBtn' onClick={() => this.props.deleteComment(comment.comment_id)}/>} 
                </div>
                <div key={comment.id} className='commentsSec'> {comment.comment}</div>
         </div>
        })
        return(
          <div>
            <section className='forum-grid'>     
                <div className='userInfo'> 
                    <div className='profilePic'><img alt='profilePic' src={profilepic}/></div>
                   <p className='userData'>Username</p> 
                   <p className='userData userName'>{username}</p>     
                   <p className='userData'>Date Joinned:</p> 
                </div>

                    <div className='blogTitle'><h2>{title}<p className='date'> <img alt='clock' className='clock' src={clockPic}/> {date}</p></h2>
                    <div>{user !== userId? null : <button className='menuBtn' onClick={this.toggleMenu}/>} 
                    {this.state.displayMenu ? 
                    <div>
                    <button className='deleteBtn dltBlogBtn'onClick={()=> this.props.deleteBlog(blogId)}/> 
                    {!this.state.toggleEdit? <button onClick={this.handleEditToggle} className='editBtn' />  : <EditBlog blogId={this.props.blogId} handleToggleE={this.handleEditToggle} updateBlog={this.props.updateBlog}/>} 
                    </div> 
                    
                    : '' } 
                    </div>
                    </div> 
                    <div className='blog'>
                    {/* <div className='blogImg'><img alt='postImg' src={blogImg}/></div> */}
                   <p>{blog}</p> 
                    </div> 
               
                {!this.state.toggleComment?
                (<div className='replySect'><button onClick={this.handleCommentToggle} className='replyBtn'/></div>)
                :
                (<div className='comments'><Comments blogId={this.props.blogId} toggleComment={this.handleCommentToggle} postComment={this.props.postComment}/></div>)}
        
                <div className = 'commentsC'>
                 {mappedComments} 
                </div>
            </section>
            <hr/>
            </div>   
       
        
        )
    }
}

export default DisplayBlogs

