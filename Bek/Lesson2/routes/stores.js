import { Router } from "express";
import { storeList } from "./data/storesData.js";

const router = Router();

router.get(
  "/", 
  (req, res, next) => {
  console.log("before get request")
  next();
},
  (req, res) => {
    console.log("after get request");
res.send(storeList);
});

router.get("/:id", (req, res) => {
  const store = storeList.find((el) => el.id === parseInt(req.params.id));
  res.send(store);
});

export default router;
