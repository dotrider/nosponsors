import React,{Component} from 'react';
import './Products.css';



class Products extends Component{
    constructor(props){
        super(props);
        
    }
   
   render(){
   
    const {productName, productImage, productPrice} = this.props
       return( 
           <section className='productCont'>
               <div><img className='productImg' src={productImage}/></div>
             <div>
            <h2>{productName}</h2>
             <p>{productPrice}</p>
             </div>
             <div><button className='cartBtn'/></div>
           </section>
       )
   }
   
   }

export default Products;