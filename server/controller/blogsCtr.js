module.exports = {
    getBlogs: async (req, res, next) => {
        const db = req.app.get('db');
        const getBlogs = await db.get_blogs().catch(err => console.log(err))
        res.status(200).send(getBlogs)
    }
}