import React,{Component} from 'react';
import axios from 'axios';
import './Cart.scss';
import StripeCheckout from 'react-stripe-checkout';
import { getSession } from '../../redux/reducer';


class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            cart: []

        }
    }

    componentDidMount(){
        // console.log('C.D.M.Cart', this.getCart)
        getSession()
        this.getCart()

    }

    getCart = () => {
        axios.get('/api/cart').then(res => {
            // console.log('cart',res.data)
            this.setState({
                cart: res.data
            })
        })
    }

    increaseQty = (id) => {
        axios.post(`/api/cart/${id}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
   
    } 

 

    decreaseQty = (id) => {
        // console.log(e.target.value)
        axios.post(`/api/carts/${id}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }


    handleToken = async () => {
        // console.log('hit!!!', this.handleToken)
        const id = this.state.cart[0].cart_id
        const res = await axios.delete(`/api/checkout/${id}`)
          this.setState = ({
              cart: res.data
          })
      
        this.props.history.push('/merch')          
        }


    render(){
        
            // console.log('total', this.state.cart)
            const totalCart = this.state.cart.reduce((total, item) => {
                // console.log('qt',item.quantity,'price', item.price)              
                return total = total + parseInt(item.quantity) * parseInt(item.price)
            },0)    
    
       
        const mappedCart = this.state.cart.map(cart => { 
            return <div className='cartItems' key={cart.product_id}>
                        <div className='cartImage'>
                            <img alt='productImage' className='cartProductImg' src={cart.product_img}/>
                        </div>  
                            <br/>
                        <div className='productInformation'>
                            <p>{cart.name}</p>
                            <p><span>Price:</span> ${cart.price}</p>
                            <p><span>Quantity:</span> {cart.quantity}</p> 
                        </div>
                        <br/>
                        <div className='quantityContainer'>
                            <button className='decreaseQTY' onClick={() => this.decreaseQty(cart.product_id)}/>
                            <button className='increaseQTY' onClick={() => this.increaseQty(cart.product_id)}/>
                        </div>
                </div> 
        })
        return(
            <section className='cartComponent'>
                <div className='cart-container'>
                    {mappedCart} 
                    <br/>
                    <div className='total'> Total: <span>$</span>{totalCart}</div> 
                </div>
                <br/>
                
                <div className='stripe'>
                <StripeCheckout
                    stripeKey='pk_test_52pNzyxRFrzjtCyGvyiEkrmc00kviWNBzl'
                    token={this.handleToken}
                    billingAddress
                    shippingAddress
                    name='#NoSponsors'
                    amount={totalCart * 100}
                />
       
                </div>
                <br/>
                
            </section>
        )
    }
}

export default Cart;
