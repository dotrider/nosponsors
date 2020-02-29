SELECT * FROM  cart
INNER JOIN products ON cart.product_id = products.product_id
WHERE cart.cart_id = $1;