import { Router } from "express";
import User from "../database/schemas/User.js";
import { hashPassword, comparePassword } from "../utils/utils.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) res.send(400);

  const userdDB = await User.findOne({ email });
  if (!userdDB) res.send(401);

  const isValid = comparePassword(password, userdDB.password);
  // isValid
  //   ? res.status(200).json("You are logged in")
  //   : res.status(401).json("Wrong email or password");
  if(isValid){
    req.session.user = { email };
    res.status(200).json('You are logged in') 
  } else {
    res.status(401).json('Wrong email or password')
  }


});

router.post("/register", async (req, res) => {
  const { email } = req.body;
  const userDB = await User.findOne({ email });
  if (userDB) {
    res.status(400).send({ message: "user already exists" });
  } else {
    const password = hashPassword(req.body.password);
    // const hashedPassword = hashPassword(password);
    const newUser = await User.create({ email, password });
    res.status(201).send({ message: "user is registered" });
  }
});

export default router;
