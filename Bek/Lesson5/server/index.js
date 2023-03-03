import express from 'express';
import productsRouter from './routes/products.js';
import authRouter from './routes/auth.js';
import session from 'express-session';
import './database/index.js'



const app = express();

const PORT = 2000;

app.use(express.json());

app.use(session({
secret: 'secret',
resave: true,
saveUninitialized: true
}));




app.use('/products', productsRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });