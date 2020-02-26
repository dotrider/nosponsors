module.exports = {
    getBlogs: async (req, res, next) => {
        const db = req.app.get('db');
        const getBlogs = await db.get_blogs().catch(err => console.log(err))
        res.status(200).send(getBlogs)
    },

    addBlog: async (req, res, next) => {
        const db = req.app.get('db');
        const {blog_img, blog_title, blog} = req.body
        const {user_id} = req.session.user
        console.log(req.session.user)
        const addblog = await db.create_blog([blog_img, blog_title, blog, user_id ]).catch(err => console.log(err))
        res.status(200).send(addblog)
    },

    getBlogsAndComments: async (req, res, next) => {
        const db = req.app.get('db');
        const getBlogAndComments = await db.blog_and_comments()
        res.status(200).send(getBlogAndComments)
    },

}