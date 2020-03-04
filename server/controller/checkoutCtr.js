module.exports = {

    checkOut: async(req, res, next) => {
        db = req.app.get('db')
        const {user_id} = req.session.user
      
        const checkout = await db.checkout(user_id)
        res.status(200).send(checkout)
    }
}