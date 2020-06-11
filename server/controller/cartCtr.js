module.exports = {
  // addToCart2: async(req, res, next) => {
  //     const db = req.app.get('db')
  //     const {id} = req.params;
  //     const {user_id} = req.session.user;

  //     const cart = await db.add_to_cart([user_id, id, user_id])
  //     res.status(200).send(cart)
  // },

  addToCart: async (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { user_id } = req.session.user;

    db.get_cart(user_id)
      .then(checkCart => {
        // console.log("checkCart backend", checkCart);
        let productExist = false;
        for (i = 0; i < checkCart.length; i++) {
          if(+checkCart[i].product_id === +id) {
            // console.log("it match!");
            productExist = true;
            let currentQty = +checkCart[i].quantity;
            let tableId = +checkCart[i].id;
            let cartId = +checkCart[i].cart_id;
            currentQty += 1;
            db.update_cart([currentQty, tableId, cartId])
              .then(response => {
                res.status(200).send(response);
              })
              .catch(err => console.log(err));
          }
        }``
        if (!productExist) {
          db.add_to_cart([user_id, id, user_id]).then(cart => {
            res.status(200).send(cart);
          });
        }
      })
      .catch(err => console.log(err));
  },

  decreaseQty: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { user_id } = req.session.user;

    db.get_cart(user_id).then(checkCart => {
      // console.log("decreasyQTY back end", checkCart);
      let productExist = false;
      for (i = 0; i < checkCart.length; i++) {
        if (+checkCart[i].product_id === +id) {
          // console.log("it match!");
          productExist = true;
          let currentQty = +checkCart[i].quantity;
          let tableId = +checkCart[i].id;
          let cartId = +checkCart[i].cart_id;
          currentQty -= 1;
          db.update_cart([currentQty, tableId, cartId])
            .then(response => {
              res.status(200).send(response);
            })
            .catch(err => console.log(err));
        }
      }
    });
  },
  
  getCart: async (req, res, next) => {
      db = req.app.get('db')
        const {user_id} = req.session.user
  

        db.get_cart(user_id).then(cart => {
            res.status(200).send(cart)
        })
  }

};
