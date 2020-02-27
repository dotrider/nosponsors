DELETE FROM blog_comments
WHERE comment_id = $1;

SELECT * FROM blog_comments;