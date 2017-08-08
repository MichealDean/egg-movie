'use strict';

module.exports = app => {
    return class SearchitemController extends app.Controller {

        async show () {
            const { ctx } = this;
            const { id } = ctx.params;
            await ctx.service.searchItem.searchItem(id).then((v) => {
                return ctx.render('/search/show_items.ejs', { result: v, title: '获取资源成功' });
            }).catch(e => {
                console.error('查询失败:', e.message);
            });
        }
    };
};