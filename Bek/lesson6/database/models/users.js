import { Sequelize, DataTypes } from "sequelize";

import { sequelize } from "../index.js";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      alowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
      defaultValue: 27,
    },
    online: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

User.sync({ alter: true }) //force: true will drop the table if it already exists
  //alter: true will add new columns if they don't exist yet in your model
  .then(() => {
    console.log("table created");
    // const user = User.build({username: 'Aigars', password: '1234', age: 28, online: false})
    // return user.save()
    // return User.create({
    //   username: "Aigars",
    //   password: "1234",
    //   age: 28,
    //   online: false,
    // });

//     return User.bulkCreate([
//       {
//         username: "Aigars",
//         password: "123",
//       },
//       {
//         username: "anna",
//         password: "1234",
//       },
//     ]);
  })
  .catch((err) => console.log(err));
