import React,{Component} from 'react';
import './Products.scss';
import axios from 'axios';

import Cart from '../Cart/Cart';


class Products extends Component{
    constructor(props){
        super(props);
        
    }

addToCart = (e) => {
    // console.log('add cart',this.addToCart)
    const product_id = e.target.value
    // console.log('e.t.v', e.target.value)
    axios.post(`/api/cart/${product_id}`).then(res => {
        console.log('checkCart front end',res)
    }).catch(err => {
      
        console.log(err)
    })
} 
   
   render(){
   
    const {productName, productImage, productPrice, product_id} = this.props

       return(
           <section className='productsss'>
           
               <div className='productImageContainer'>
                   <img className='productImg' src={productImage}/>
               </div>
               <div className='productInfo'>
               <h2 className='product'>{productName}</h2>
               <p className='product'>{productPrice}</p>
               <button onClick={this.addToCart} value={product_id} className='cartBtn'>-</button>
               </div>
           </section> 
            
       )
   }
   
   }

export default Products;