module.exports = {
    addToCart2: async(req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params;
        const {user_id} = req.session.user;
        
        //WRITE SQL FOR UPDATE CART
        //CHECK IF PRODUCT IS IN CART/ELSE ADD TO CART
        


        const cart = await db.add_to_cart([user_id, id, user_id])
        res.status(200).send(cart)
    }

    //ADD CONDITIONAL STATEMENT
,
addToCart: async(req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.params;
    const {user_id} = req.session.user;
    
    db.get_cart(user_id).then( checkCart => {
        console.log('checkCart back end',checkCart)
        let productExist = false
        for(i=0; i < checkCart.length; i++){
            if(+checkCart[i].product_id === +id){
                console.log('it match!')
                productExist = true;
               let currentQty = +checkCart[i].quantity 
               let tableId = +checkCart[i].id
               let cartId = +checkCart[i].cart_id
                currentQty += 1
                db.update_cart([currentQty, tableId, cartId]).then(response => {
                    res.status(200).send(response)
                }).catch(err => console.log(err))

            }
        }        
           if(!productExist){ 
              db.add_to_cart([user_id, id, user_id]).then(cart => {
                res.status(200).send(cart)
              })
            }
    }).catch(err => console.log(err))
   

    // if(!checkCart.data){
    //      const cart = await db.add_to_cart([user_id, id, user_id])
    //     res.status(200).send(cart)}

},

    decreaseQty: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        const {user_id} = req.session.user;
        
        db.get_cart(user_id).then( checkCart => {
            console.log('checkCart back end',checkCart)
            let productExist = false
            for(i=0; i < checkCart.length; i++){
                if(+checkCart[i].product_id === +id){
                    console.log('it match!')
                    productExist = true;
                   let currentQty = +checkCart[i].quantity 
                   let tableId = +checkCart[i].id
                   let cartId = +checkCart[i].cart_id
                    currentQty -= 1
                    db.update_cart([currentQty, tableId, cartId]).then(response => {
                        res.status(200).send(response)
                    }).catch(err => console.log(err))
    
                }
            }  
        })
    }   
}