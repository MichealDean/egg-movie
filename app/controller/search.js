'use strict';

module.exports = app => {
    return class ShowController extends app.Controller {
        async index () {
            const { ctx } = this;
            // ctx.cookies.set(config.security.csrf.cookieName, config.security.xframe.value);
            await ctx.render('/search/show_search.ejs', { title: '请输入地址查询！' });
        }

        async show () {
            const { ctx } = this;
            const { id } = ctx.params;
            await ctx.service.search.searchALl(id).then((v) => {
                ctx.body = new ctx.helper.Successful().custom(v);
            }).catch(e => {
                console.error('查询失败:', e.message);
            });
        }
    };
};