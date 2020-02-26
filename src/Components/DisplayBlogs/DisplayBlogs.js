import React,{Component} from 'react';
import './DisplayBlogs.css'

class DisplayBlogs extends Component{
constructor(){
    super();
}


    render(){
        console.log(this.props.title)
        const {title, blog} =this.props
        return(
            <section className='displayCont'>
              <div className='blogTitle'><h2>{title}</h2></div> 
                <div className='blog'><p>{blog}</p></div> 
                <div className='replySect'><button className='replyBtn'></button></div>
            </section>
        )
    }
}


export default DisplayBlogs
