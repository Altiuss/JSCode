import express from 'express';
import goodsRouter from './routes/goods.js';
import shopsRouter from './routes/shops.js';
import cartRouter from './routes/cart.js';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import './database/index.js'




const app = express();

const PORT = 2000;
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret:"secret", // secret key
    resave: false,
    saveUninitialized: false,
}));





app.use("/auth", authRouter)
app.use("/cart", cartRouter)
app.use("/goods", goodsRouter)
app.use("/shops", shopsRouter)





app.use('/goods', goodsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});