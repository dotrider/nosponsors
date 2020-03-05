CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
username VARCHAR(20) NOT NULL,
password TEXT NOT NULL,
email VARCHAR(50) NOT NULL,
profile_pic TEXT DEFAULT 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4NDhANCgoKDQ8PDQ4ODQ0PDQ8ODQ0PFREXFhcRExMYHCggGBolGxMTITEhJSkrLi4uFx8zRDMtNzQ3LjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QALhABAAIAAwQKAgMBAQAAAAAAAAECAwQRITFBUQUSMjNhcXKBscEikUKh0WIj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7w8C9uzSfPdCaMhif8R7z/gKwtTkL86T7z/iHEy9676T5xtBGAAAAAAAAAAAAAAAAAAAAAAD3DpNpiK75B7h4c3nSsa/TSwMnWu235T47kmBgxSNI955pQAAAAQY2VrfhpPOGbjYNqTpaPKeEtlxi4cWjS0AxR3j4U0t1Z9p5w4AAAAAAAAAAAAAAAAAAB40ejsLZ1547I8mfEa7G3h16sREcIiAdAAAAAAAArZ7C61NY312x5cWU3Zhi4teraY5TIOQAAAAAAAAAAAAAAAAAd4Hbr6obTEwp0tE8phtgAAAAAAAAMjOx/6W9vhrsfNzriW89ARAAAAAAAAAAAAAAAAAA8bOWxOtSJ8NJ82OtZDG6s9WZ2W3eEg0wAAAAAAAc4lurEzPCNWJadZ1njMyvdI438Inxt/iiAAAAAAAAAAAAAAAAAAAADQyeb1/G86TwnmusJZwM5auy35R/cA1BXw83S38tPCdiaLRwmP2DoedaOcftDiZqld9ony2gnVc3mop+NdtvhXxs9M7KR1Y58VQCZ12yAAAAAAAAAAAAAAAAAAAACxhZO9t8dWPEFd40qZCsdqZn+k9ctSN1K/rUGM6iJ4Rb9S24rEboiHoMOYnjFv1LlvPJjXfEAwnrYtgUnfSv6Q3yFJ3TMf3AM0WcXJXru0tHhvVpjTZMTE8gAAAAAAAAAAAAAAAAEuXy9sSdmyOM8jLYM3tpwjfLWpSKxpWNIgEeBl603RrPOd6YAAAAAAAAAEWLg1vH5R78UoDJzOVmm3fXny80DctGsaSy85l+pOsdmd3h4ArgAAAAAAAAAAAAky1db1jx+NoNPK4XUrEcZ2z5pgAAAAAAAAAAAAAcY2HFqzWeLsBhWjSZid8ToLGfrpiT4xEq4AAAAAAAAAACfI95X3+JQJ8j3lff4kGsAAAAAAAAAAAAAAADN6S7cemPmVRb6T7cen7lUAAAAAAAAAAAT5HvK+/xKBPke8r7/Eg1gAAAAAAAAAAAAAAAZvSfbj0/cqi30n249P3KoAAAAAAAAAAAnyPeV9/iUCfI95X3+JBrAAAAAAAAAAAAAAAAzek+3Hp+5VFvpPtx6fuVQAAAAAAAAAABPke8r7/ABIA1gAAAAAAAAAAAAAAAZvSfbj0/cqgAAAAAAA//9k='
);

--BLOG (TABLE)

-- CREATE TABLE blogs(
-- blog_id SERIAL PRIMARY KEY,
-- blog TEXT,
-- user_id REFERENCES users(user_id),
-- blog_title VARCHAR(50),
-- blog_img TEXT,
-- post_date TIMESTAMP(0),
-- username REFERENCES users(username)
--  );

-- CREATE TABLE blogs(
-- blog_id SERIAL PRIMARY KEY,
-- blog TEXT,
-- user_id INT,
-- blog_title VARCHAR(50),
-- blog_img TEXT,
-- post_date TIMESTAMP(0) NOT NULL,
-- username TEXT,
-- FOREIGN KEY (user_id) REFERENCES users(user_id),
-- FOREIGN KEY (username) REFERENCES users(username)
-- );

-- --POST BLOG

-- INSERT INTO blogs
-- (blog_img, blog_title, blog, user_id)
-- VALUES
-- ($1,$2,$3,$4);
-- -- returning *;
-- SELECT * FROM blogs;

-- --BLOG-COMMENTS (TABLE)

-- CREATE TABLE blog_comments(
-- commment_id SERIAL PRIMARY KEY,
-- comment TEXT,
-- user_id REFERENCES users(user_id),
-- blog_id REFERENCES blogs(blog_id)  
-- );

-- --POST BLOG COMMENTS
-- INSERT INTO blog_comments
-- (comment, user_id, blog_id)
-- VALUES
-- ($1,$2,$3);
-- -- returning *;

-- SELECT * FROM blog_comments;

--------------------------------------------------------
--------------------------------------------------------

-- --EVENTS

-- CREATE TABLE events(
-- event_id SERIAL PRIMARY KEY,
-- event_title VARCHAR(50),
-- event TEXT,
-- user_id REFERENCES user(user_id),    
-- );


-- --EVENT COMMENTS

-- CREATE TABLE event_comments(
-- commment_id SERIAL PRIMARY KEY,
-- comment TEXT,
-- user_id REFERENCES users(user_id),
-- event_id REFERENCES events(event_id)  
-- );

--------------------------------------------------------
--------------------------------------------------------

-- CREATE TABLE products (
--     product_id SERIAL PRIMARY KEY,
--     name VARCHAR(50),
--     price MONEY,
--     product_img TEXT
-- );

-- SELECT * FROM products;


-- SELECT SUM(price) FROM  products
-- INNER JOIN cart ON cart.product_id = products.product_id
-- WHERE cart.cart_id = 4;


-- create table cart (
-- id serial primary KEY,
-- cart_id int,
-- user_id integer,
-- product_id integer,
-- foreign key(user_id) references users(user_id),
-- foreign key (product_id) references products(product_id)
-- );

-- INSERT INTO cart
-- (cart_id, product_id, user_id)
-- VALUES
-- ($1, $2, $3);

-- SELECT * FROM cart
-- WHERE cart_id = $1;


-----

--------------------------------------------------------
--2-29-20-- CHANGES TO DB CART TABLE/ ADDED QTY COLUMN
--------------------------------------------------------
--CHANGE 1
-- ALTER TABLE cart
-- ADD quantity INT DEFAULT 1;

---CHANGE 2 UPDATED add_to_cart.slq--
-- INSERT INTO cart
-- (cart_id, product_id, user_id, quantity)
-- VALUES
-- ($1, $2, $3, $4);

-- SELECT * FROM cart
-- WHERE cart_id = $1;

--CHANGE 3
