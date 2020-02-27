INSERT INTO blogs
(blog_img, blog_title, blog, user_id, post_date)
VALUES
($1,$2,$3,$4,$5);
-- returning *;

SELECT * FROM blogs;