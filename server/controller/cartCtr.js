module.exports = {
    addToCart: async(req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params;
        const {user_id} = req.session.user;
        
        //WRITE SQL FOR UPDATE CART
        //CHECK IF PRODUCT IS IN CART/ELSE ADD TO CART

        const cart = await db.add_to_cart([user_id, id, user_id])
        res.status(200).send(cart)
    }

    //ADD CONDITIONAL STATEMENT


}