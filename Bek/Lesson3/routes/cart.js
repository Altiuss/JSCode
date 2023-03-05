import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const { cart } = req.session;
  if (!cart) {
    res.send("You have no cart");
  } else {
    res.send(cart);
  }
});

router.post("/item", (req, res) => {
 
  const { id, name,  mobile, color, quantity } = req.body;
  const cartItem = { id, name, mobile, color, quantity };
  const { cart } = req.session;
  if (cart) {
    req.session.cart.items.push(cartItem);
  } else {
    req.session.cart = {
      items: [cartItem],
    };
  }
  console.log(req.session);
  console.log(req.sessionID);
  console.log(req.body);
  res.send("Cart is updated");
});

export default router;
