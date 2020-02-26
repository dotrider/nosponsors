import React,{Component} from 'react';
import './DisplayBlogs.css'
import Comments from '../Comments/Comments';

class DisplayBlogs extends Component{
constructor(){
    super();
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
        console.log(this.props.title)
        const {title, blog, toggle} =this.props
        return(
            <section className='displayCont'>
              <div className='blogTitle'><h2>{title}</h2></div> 
                <div className='blog'><p>{blog}</p></div> 
                <div>
                {!this.state.toggleComment?
                (<div className='replySect'><button onClick={this.handleCommentToggle} className='replyBtn'></button></div>)
                :
                (<div><Comments toggleComment={this.handleCommentToggle}/></div>)}
                </div>
            </section>
        )
    }
}


export default DisplayBlogs
