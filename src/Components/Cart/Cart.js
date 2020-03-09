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

    // componentDidUpdate(preProps, preState){
    //     if(preState.cart !== this.state.cart){
    //         this.getCart()
    //     }
    // }

    // handleToken = () => {
    //     console.log('hit!!!', this.handleToken)
    //     const id = this.state.cart[0].cart_id
    //     axios.delete(`/api/checkout/${id}`).then(res => {
    //       console.log('res!',res)
    //       this.setState = ({
    //           cart: res.data
    //       })
    //     })  
    //     this.props.history.push('/cart')          
    //     }
    

    handleToken = async () => {
        console.log('hit!!!', this.handleToken)
        const id = this.state.cart[0].cart_id
        const res = await axios.delete(`/api/checkout/${id}`)
          this.setState = ({
              cart: res.data
          })
      
        this.props.history.push('/cart')          
        }


    render(){
        
        // function handleToken(token, addresses){
        //     // console.log({token, addresses})
        //     alert('SUCCESS!')
        //     }

        

            // console.log('total', this.state.cart)
            const totalCart = this.state.cart.reduce((total, item) => {
                // console.log('qt',item.quantity,'price', item.price)              
                return total = total + parseInt(item.quantity) * parseInt(item.price)
            },0)    
    
       
        const mappedCart = this.state.cart.map(cart => {
            return <div key={Cart.id} className='cartItems'>
                <div className='cartImage'><img className='cartProductImg' src={cart.product_img}/></div>  
                <div className='productInformation'>
                <p>Product: {cart.name}</p>
                <p>Price: {cart.price}</p>
                <p>Quantity: {cart.quantity}</p> 
                </div>
                <br/>
                <div className='quantityContainer'>
                <button className='decreaseQTY' onClick={this.decreaseQty} value={cart.product_id}/>
                <button className='increaseQTY' onClick={this.increaseQty} value={cart.product_id}/>
                </div>
                </div> 
        })
        return(
            <section>
                <div className='cart-container'>
                {mappedCart} 
            
                </div>
                <div className='total'> Total: ${totalCart}</div> 
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
            </section>
        )
    }
}

export default Cart;