import React,{Component} from 'react';
import axios from 'axios';
import Products from '../Products/Products';
import {FiShoppingCart} from 'react-icons/fi';
import './Merch.scss'

class Merch extends Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }


componentDidMount(){
    this.getAllProducts()
}

getAllProducts = () => {
    axios.get('/api/products').then(res => {
        console.log('products', res.data)
        this.setState({
            products: res.data
        })
    })
}


    render(){

        let mappedProducts = this.state.products.map(product => {
            return <Products 
            productName={product.name}  
            productImage={product.product_img} 
            productPrice={product.price}
            product_id={product.product_id}/>
        })
        return(
            <section>
                <div className='cartIcon'>
                    <FiShoppingCart className='cart' />
                </div>
                <div className='mainProducts'>
                {mappedProducts}
                </div>
            </section>
        )
    }
}

export default Merch

