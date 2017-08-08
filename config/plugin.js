'use strict';

exports.nunjucks = {
    enable: false,
    package: 'egg-view-nunjucks',
};

exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
};

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};

exports.security = {
    domainWhiteList: ['http://127.0.0.1:7001', 'http://movies.mengxc.info'],
};

exports.static = true;