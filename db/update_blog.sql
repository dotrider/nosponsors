UPDATE blogs
SET blog_img = $1, blog_title = $2, blog = $3
WHERE blog_id = $4;