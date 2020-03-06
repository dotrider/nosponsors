SELECT * FROM blogs
INNER JOIN users ON blogs.user_id = users.user_id;