INSERT INTO cart
(cart_id, product_id, user_id, quantity)
VALUES
($1, $2, $3, $4);

SELECT * FROM cart
WHERE cart_id = $1;