import { Router } from "express";
import User from "../database/schemas/User.js";
import { hashPassword, comparePassword } from "../utilits/utils.js";

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if(!email || !password) return res.status(400).send('Please provide email and password');

  const usedDB = await User.findOne({ email });
  if(!usedDB) return res.status(401).send('User does not exist');

  const isPasswordValid = comparePassword(password, usedDB.password);
  isPasswordValid ? res.send('You are logged in') : res.status(401).send('Invalid password');
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
