SELECT * FROM blogs
INNER JOIN blog_comments
ON blogs.blog_id = blog_comments.blog_id;
