import express from "express";
import mobilesRouter from "./routes/mobiles.js";
import storesRouter from "./routes/stores.js";

const app = express();

const PORT = 2222;

app.use(express.json());
app.use("/mobiles", mobilesRouter);
app.use("/stores", storesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







