import {Router} from "express";

const router = Router();

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