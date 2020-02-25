module.exports = {
    getBlogComments: async (req, res, next) => {
        const db = req.app.get('db')
        const blogComments = await db.get_blog_comments().catch(err => console.log(err))
        res.status(200).send(blogComments)
    }
}