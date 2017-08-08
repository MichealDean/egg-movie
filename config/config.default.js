'use strict';

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = `${appInfo.name}_egg-demo`;

    // add your config here
    config.view = {
        defaultViewEngine: 'ejs',
        mapping: {
            '.ejs': 'ejs',
        },
    };
    config.security = {
        xframe: {
            enable: true,
            // value: 'SAMEORIGIN',
        },
        csp: {
            match: '/',
            // policy: {},
        },
        csrf: {
            // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
            // bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
            headerName: 'x-csrf-token',
            useSession: false,
            cookieName: 'csrfToken',
            sessionName: 'csrfToken',
            ignoreJSON: true,
        },
    };
    config.searchUri = 'http://www.bt122.com';
    config.currentUri = 'http://127.0.0.1:7001';
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'movie',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '',
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    };
    config.keys = '1,1';
    config.siteFile = {
        '/favicon.ico': `/public/favicon.ico`,
    };

    return config;
};