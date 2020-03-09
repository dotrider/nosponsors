INSERT INTO users
(username, password, email, profile_pic)
VALUES
($1,$2,$3,$4);

SELECT user_id, username, email, profile_pic FROM users
WHERE email = $3