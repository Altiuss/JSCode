import express from 'express';

import {sequelize} from './database/index.js';

import {User} from './database/models/users.js';

import userRouter from './routes/user.js';

const app = express();

const PORT = 2000;

app.use(express.json());

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

