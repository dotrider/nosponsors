import React,{Component} from 'react';
import axios from 'axios';
import './Cart.scss';

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            cart: []

        }
    }

    componentDidMount(){
        console.log('C.D.M.Cart', this.getCart)
        this.getCart()

    }

    getCart = () => {
        axios.get('/api/cart').then(res => {
            console.log('cart',res.data)
            this.setState({
                cart: res.data
            })
        })
    }

 

    decreaseQty = (e) => {
        axios.post(`/api/carts/${e.target.value}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }


    render(){


        const mappedCart = this.state.cart.map(cart => {
            return <div key={Cart.id}>
             <img className='cartProductImg' src={cart.product_img}/>  
            <p>Product: {cart.name}</p>
            <p>Price: {cart.price}</p>
            <p>Quantity: {cart.quantity}</p> 
            {/* <p>Total: {cart.sum}</p> */}
            {/* <p>Total: {cart.sum}</p> */}
            <button onClick={this.decreaseQty} value={cart.product_id}/>
            </div> 
        })
        return(
            <section>
                {mappedCart} 
            </section>
        )
    }
}

export default Cart;