'use strict';

module.exports = (app) => {
    class Demo extends app.Controller {
        async index () {
            this.ctx.body = 'Demo';
        }
    }
    return Demo;
};