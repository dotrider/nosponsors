module.exports = {

    checkOut: async(req, res, next) => {
        db = req.app.get('db')
        const {id} = req.params
      
        const checkout = await db.checkout(id)
        res.status(200).send(checkout)
    }
}