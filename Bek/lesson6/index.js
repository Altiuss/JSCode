import express from 'express';

import sequelize from './database/index.js';

const app = express();

const PORT = 2000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

