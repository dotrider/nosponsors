INSERT INTO blogs
(blog_img, blog_title, blog, user_id)
VALUES
($1,$2,$3,$4);
-- returning *;

SELECT * FROM blogs;