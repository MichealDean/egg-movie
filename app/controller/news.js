'use strict';

module.exports = app => {
    class NewsController extends app.Controller {
        * list() {
            const ctx = this.ctx;
            const page = ctx.query.page || 1;
            const newList = yield ctx.service.news.list(page);
            yield this.ctx.render('/news/list.tpl', { list: newList });
        }
    }
    return NewsController;
};