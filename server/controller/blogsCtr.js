module.exports = {
    getBlogs: async (req, res, next) => {
        const db = req.app.get('db');
        const getBlogs = await db.get_blogs().catch(err => console.log(err))
        res.status(200).send(getBlogs)
    },

    addBlog: async (req, res, next) => {
        const db = req.app.get('db');
        const {post_date, blog_img, blog_title, blog} = req.body
        // const {blog_img, blog_title, blog} = obj
        const {user_id} = req.session.user
        console.log(req.session.user)
        const addblog = await db.create_blog([blog_img, blog_title, blog, user_id, post_date ]).catch(err => console.log(err))
        res.status(200).send(addblog)
    },

    deleteBlog: async (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        const blog = await db.delete_blog(id)
        res.status(200).send(blog)
    }

    // getBlogsAndComments: async (req, res, next) => {
    //     const db = req.app.get('db');
    //     const getBlogAndComments = await db.blog_and_comments()
    //     res.status(200).send(getBlogAndComments)
    // },

}