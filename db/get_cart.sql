SELECT * FROM cart
JOIN cart.product_id ON products.product_id
WHERE cart.user_id = $1;