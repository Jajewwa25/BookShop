const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const sequelize = new Sequelize('database','username','password',{
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/BookShop.sqlite'
});

const Book = sequelize.define('books',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    author:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

const Customer = sequelize.define('customers',{
    id_customer:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

const Order = sequelize.define('orders',{
    id_order:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

});

sequelize.sync();
