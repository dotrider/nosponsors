SELECT SUM(quantity * price) FROM  products
INNER JOIN cart ON cart.product_id = products.product_id
WHERE cart.cart_id = 25;


SELECT *, (quantity * price) AS total FROM  cart
INNER JOIN products ON cart.product_id = products.product_id
WHERE cart.cart_id = 25;