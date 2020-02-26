INSERT INTO blog_comments
(comment, user_id, blog_id)
VALUES
($1,$2,$3);
-- returning *;

SELECT * FROM blog_comments;