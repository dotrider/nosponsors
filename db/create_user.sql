INSERT INTO users
(username, password, email)
VALUES
($1,$2,$3);

SELECT user_id, username, email FROM users
WHERE email = $3