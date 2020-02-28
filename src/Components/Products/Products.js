import React,{Component} from 'react';
import './Products.css';
import axios from 'axios';



class Products extends Component{
    constructor(props){
        super(props);
        
    }

addToCart = (e) => {
    const product_id = e.target.value
    axios.post(`/api/cart/${product_id}`).catch(err => {
        console.log(err)
    })
} 
   
   render(){
   
    const {productName, productImage, productPrice, product_id} = this.props
       return( 
           <section className='productCont'>
               <div><img className='productImg' src={productImage}/></div>
             <div>
            <h2>{productName}</h2>
             <p>{productPrice}</p>
             </div>
             <div><button onClick={this.addToCart} value={product_id} className='cartBtn'/></div>
           </section>
       )
   }
   
   }

export default Products;