import { Router } from "express";
import User from "../database/schemas/User.js";
import { hashPassword } from "../utilits/utils.js";

const router = Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    if (req.session.user) {
      res.send("You are already logged in");
    } else {
      req.session.user = { username };
      res.send(req.session);
    }
  } else {
    res.send("Please provide username and password");
  }
});

router.post("/register", async (req, res) => {
  const { email } = req.body;
  const userDB = await User.findOne({ email });
  if (userDB) {
    res.status(400).send("User already exists");
  } else {
    const password = hashPassword(req.body.password);
    // const hashedPassword = hashPassword(password);
    const newUser = await User.create({ email, password });
    res.status(201).send("User is registered");
  }
});

export default router;
