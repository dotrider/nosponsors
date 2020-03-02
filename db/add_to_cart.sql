INSERT INTO cart
(cart_id, product_id, user_id)
VALUES
($1, $2, $3);

SELECT * FROM cart
WHERE cart_id = $1;