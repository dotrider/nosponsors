-- SELECT * FROM blog_comments;

SELECT * FROM blog_comments
INNER JOIN users ON blog_comments.user_id = users.user_id;