'use strict';

module.exports = app => {
    /* page */
    app.get('/', 'home.index');

    /* api */
    app.get('/demo', 'demo.index');
    app.get('/news', 'news.list');
    // todo 定义有问题
    require('./router/api')(app);
    require('./router/page')(app);
};
