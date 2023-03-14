import Sequelize from 'sequelize'
import {password} from './../password.js'




export const sequelize = new Sequelize('facebook', 'root', password,{
    dialect: 'mysql',
    port: 3306,
    host: 'localhost',
})

// sequelize.authenticate()
// .then(() => console.log('Connected to Mysql database'))
// .catch((err) => console.log(err));
    

const start = async () => {
    try {
        await sequelize.authenticate()
        console.log('connected to mysql database')
    }catch (err) {
        console.log(err)
    }
}

start();



