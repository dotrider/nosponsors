import React,{Component} from 'react';
import axios from 'axios';
import './Cart.scss';
import StripeCheckout from 'react-stripe-checkout'


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

    increaseQty = (e) => {
        axios.post(`/api/cart/${e.target.value}`).then(res => {
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
        
        function handleToken(token, addresses){
            console.log({token, addresses})
            }

            console.log('total', this.state.cart)
            const totalCart = this.state.cart.reduce((total, item) => {
                console.log('qt',item.quantity,'price', item.price)
              
                return total = total + parseInt(item.quantity) * parseInt(item.price)
            },0)    
    
       
        const mappedCart = this.state.cart.map(cart => {
            return <div key={Cart.id} className='cartItems'>
                <div className='cartImage'><img className='cartProductImg' src={cart.product_img}/></div>  
                <p>Product: {cart.name}</p>
                <p>Price: {cart.price}</p>
                <p>Quantity: {cart.quantity}</p> 
                <button onClick={this.decreaseQty} value={cart.product_id}/>
                <button onClick={this.increaseQty} value={cart.product_id}/>
                </div> 
        })
        return(
            <section>
                <div className='cart-container'>
                {mappedCart} 
                </div>
                <div className='total'> Total: ${totalCart}</div> 
                <div className='stripe'>
                <StripeCheckout
                    stripeKey='pk_test_52pNzyxRFrzjtCyGvyiEkrmc00kviWNBzl'
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    ammount={totalCart}
            />
                </div>
            </section>
        )
    }
}

export default Cart;