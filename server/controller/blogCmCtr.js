module.exports = {
    getAllBlogComments: async (req, res, next) => {
        const db = req.app.get('db');
        const getComments = await db.get_blog_comments()
        res.status(200).send(getComments)
    }
    ,
    addCommentToBlog: async (req, res, next) => {
        const db = req.app.get('db');
        const {comment, blog_id} = req.body
        const {user_id}= req.session.user
        const addcomment = await db.create_blog_comment([comment, user_id, blog_id]).catch(err => console.log(err))
        res.status(200).send(addcomment)
    }
}