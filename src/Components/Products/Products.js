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
            <div className='productCard'>
               <div><img className='productImg' src={productImage}/></div>
            <div className='productInfor'>
            <h2>{productName}</h2>
            <p>{productPrice}</p>
            </div>
            <div><button onClick={this.addToCart} value={product_id} className='cartBtn'>-</button></div>
            </div>
       )
   }
   
   }

export default Products;