
module.exports = {

    getProducts: async(req, res, next) => {
        const db = req.app.get('db')
        const products = await db.get_products()
        res.status(200).send(products)
    }
}