import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getSession } from '../../redux/reducer';
import axios from 'axios';
import Products from '../Products/Products';
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
    this.props.getSession().then( () => {
        axios.get('/api/products').then(res => {
        // console.log('products', res.data)
        this.setState({
            products: res.data
        })
    })
})
}


    render(){

        let mappedProducts = this.state.products.map(product => {
            return <Products key={product.product_id}
            productName={product.name}  
            productImage={product.product_img} 
            productPrice={product.price}
            product_id={product.product_id}/>
        })
        return(
            <section className='merch'>

                <div className='productContainer'>
                {mappedProducts}
                </div>
               
            </section>
        )
    }
}

const mapDispatchToProps = {
    getSession
}

export default connect(null, mapDispatchToProps)(Merch)

