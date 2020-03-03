import React,{Component} from 'react';
import axios from 'axios';

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

    // decreaseQty = (e) => {
    //     let product_id = e.target.value
    //     axios.post(`/api/cart/${product_id}`).then(res => {
    //         this.setState({
    //             cart: res.data
    //         })
    //     })
    // }


    render(){
        const {product_id} =this.props
        const mappedCart = this.state.cart.map(cart => {
            return <div>
            <p>Product: {cart.name}</p>
            <p>Quantity: {cart.quantity}</p>
            <button onClick={this.decreaseQty} value={product_id} className='cartBtn'/>
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