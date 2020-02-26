INSERT INTO blog_comments
(comment, user_id, blog_id)
VALUES
($1,$2,$3);
-- returning *;

SELECT * FROM blog_comments;

-- SELECT * FROM blogs
-- join blog_comments
-- on(blogs.user_id = blog_comments.user_id)
-- where blogs.user_id = $2;