'use strict';

/**
 * pm2 启动文件 pm2 start server.js
 */
process.env.NODE_ENV = 'production';

const egg = require('egg');


const workers = Number(process.argv[2] || require('os').cpus().length);
egg.startCluster({
    workers,
    baseDir: __dirname,
});