import React,{Component} from 'react';
import './Comments.scss';


class Comments extends Component{
 constructor(props){
     super(props);
     this.state = {
        comment: ''
     }
     
 }


handleChange = (e) => {
    console.log('handleChange',e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
}

addComment = () => {
    const {comment} = this.state
    const post_date = new Date(Date.now()).toISOString()
    let newComment = {
        comment,
        blog_id: this.props.blogId,
        post_date
    }
   this.props.postComment(newComment)
   this.setState({
    comment:''
   }) 
   this.props.toggleComment()
}

 
render(){
const {comment} = this.state
    return(
  
        <section className='composeComment'>                 
            <input className='commentInput' value={comment} name='comment' placeholder='comment here' onChange={this.handleChange}/>
            <input className='submitBtn ' onClick={this.addComment} type='submit' value="Post" />
           
            <div> 
            <button className='cancelBtn' onClick={this.props.toggleComment}/>
            </div>
        </section>         
    )
}

}

export default Comments

