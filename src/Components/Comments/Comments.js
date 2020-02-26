import React,{Component} from 'react';
import './BlogForm.css';



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
        <div>
        <section className='addComment'>   
                <div>
                <input value={comment} name='comment' placeholder='comment here' onChange={this.handleChange}/>
                <br/>
                <input onClick={this.addBlog} type='submit' value="add" />
                </div>
                <br/>
        </section>
        <br/>
         <button onClick={this.props.toggle}>Cancel</button>
      </div>
    )
}

}

export default Comments