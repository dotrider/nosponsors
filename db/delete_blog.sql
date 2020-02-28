DELETE FROM blog_comments
WHERE blog_id = $1;

DELETE FROM blogs
WHERE blog_id = $1;

SELECT * FROM blogs;