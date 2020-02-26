import React,{Component} from 'react';
import './Comments.css';


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

    let newComment = {
        comment,
    }
   this.props.postComment(newComment)
   this.setState({
    comment:''
   }) 
   this.props.toggle()
}

 
render(){
const {comment} = this.state
    return(
  
        <section className='composeComment'>   
                <div className='commentCont'>
                <input className='commentInput' value={comment} name='comment' placeholder='comment here' onChange={this.handleChange}/>
                <input className='submitBtn ' onClick={this.addBlog} type='submit' value="add" />
                </div>
                <div> 
                <button className='cancelBtn' onClick={this.props.toggleComment}/>
                </div>
        </section>         
    )
}

}

export default Comments