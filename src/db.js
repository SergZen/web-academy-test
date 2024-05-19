const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    dialectOptions: {
        timezone: process.env.db_timezone,
        connectTimeout: 1000
    },
    define: {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

let db = {
    models : {},
    sequelize: sequelize
};

const Subscription = require("../models/subscription.js")(sequelize, DataTypes);

db.models.Subscription = Subscription;

module.exports = {
    db
};
