'use strict';

module.exports = app => {
    app.resources('search', '/search', app.controller.search);
    app.resources('search_item', '/searchitem', app.controller.searchItem);
};