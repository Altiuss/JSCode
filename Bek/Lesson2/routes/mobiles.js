import { Router } from "express";
import {mobileList} from "./data/mobilesData.js";

const router = Router();

router.get("/", (req, res) => {
 const {qontity} = req.query;
 const parseQuantity = parseInt(qontity);
  if (!isNaN(parseQuantity)) {
    const filteredMobiles = mobileList.filter((el) => el.qontity === parseQuantity);
    res.send(filteredMobiles);
  }
  else {

  res.send(mobileList);
  }
});

router.get("/:id", (req, res) => {
  const mobile = mobileList.find((el) => el.id === parseInt(req.params.id));
  res.json(mobile);
});

router.post("/", (req, res) => {
  const mobile = req.body;
  mobileList.push(mobile);
  res.send(mobile);
});

export default router;
