import React,{Component} from 'react';
import axios from 'axios';

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            cart: []
        }
    }


    

    render(){
        return(
            <section>
                Cart
            </section>
        )
    }
}

export default Cart;