module.exports = {
    addToCart: async(req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params;
        const {user_id} = req.session.user;

        const cart = await db.add_to_cart([user_id, id, user_id])
        res.status(200).send(cart)
    },

    getAllInCart: async(req, res, next) => {
        const db = req.app.get('db')
        
        const cart = await db.get_cart()
        res.status(200).send(cart)
    }
}