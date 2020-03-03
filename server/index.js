require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STR} = process.env;
const {login, register, userSession, logout} = require('./controller/authCtr');
const {getBlogs, addBlog, getBlogsAndComments, deleteBlog} = require('./controller/blogsCtr');
const {getAllBlogComments, addCommentToBlog, deleteComment} = require('./controller/blogCmCtr')
const {getProducts} = require('./controller/productsCtr')
const {addToCart, decreaseQty, getCart} = require('./controller/cartCtr')

const app = express();
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(CONNECTION_STR).then(db => {
    app.set('db', db);
    console.log(`in Sync with DB`)
})


//AUTH
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/userSession', userSession);
app.get('/auth/logout', logout);

//BLOGS
app.get('/api/blogs', getBlogs);
app.post('/api/blogs', addBlog);
app.delete('/api/blogs/:id', deleteBlog);


//BlOG COMMENTS
app.get('/api/comments', getAllBlogComments);
app.post('/api/comments',addCommentToBlog);
app.delete('/api/comments/:id', deleteComment);

//BLOG and COMMENTS
// app.get('/api/get_blog_comments', getBlogsAndComments);

//PRODUCTS
app.get('/api/products', getProducts);

//CART
app.post('/api/cart/:id', addToCart);
app.post('/api/carts/:id', decreaseQty);
app.get('/api/cart', getCart);




app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));