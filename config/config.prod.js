'use strict';

module.exports = () => {
    const config = {};
    config.currentUri = 'http://movies.mengxc.info';
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'movie',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'root',
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    };
    config.keys = 'prod,prod';
    return config;
};