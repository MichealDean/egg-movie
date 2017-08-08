'use strict';

let cheerio = require('cheerio');
let axios = require('axios');

let existVerify = Symbol('exsitverify');
let saveAndUpdateForMoviesDetails = Symbol('saveAndUpdateForMoviesDetails');


module.exports = (app) => {
    return class SearchItem extends app.Service {
        async searchItem (movieId) {
            let { /* ctx,*/ config } = this;
            let movie = await this[existVerify](movieId);
            if (!movie) {
                throw new Error('The movies is not exist!');
            }
            let searchItemHtml = await axios.get(`${config.searchUri}${movie.href}`);
            let $ = cheerio.load(searchItemHtml.data);
            let resourcesItems = [];
            $('[class="box Video-list Xunlei"] ul li a').each((index, element) => {
                resourcesItems.push({ url: element.attribs.href, name: element.children[0].data, movie_id: movie.id });
            });
            let items = resourcesItems.map(async (value) => {
                return await this[saveAndUpdateForMoviesDetails](value);
            });
            resourcesItems = [];
            for (let item of await Promise.all(items)) {
                resourcesItems.push({
                    name: item.name,
                    url: item.url,
                });
            }
            return resourcesItems;
        }

        /**
         * 查询改电影是否存在
         * @returns {Promise.<Model>}
         */
        async [existVerify] (id) {
            return await
                this.ctx.model.Movies.findOne({
                    where: {
                        id,
                    },
                });
        }

        /**
         * 保存并修改已经存在的
         * @param item
         * @returns {Promise.<void>}
         */
        async [saveAndUpdateForMoviesDetails] (item) {
            return await this.ctx.model.MoviesDetails.create(item);
            let existDt = await
                this.ctx.model.MoviesDetails.findOne({
                    where: {
                        name: item.name,
                        url: `'${item.url}'`,
                        movie_id: item.movie_id,
                    },
                });
            if (!existDt) {
                item.count = 1;
                return await
                    this.ctx.model.MoviesDetails.create(item);
            }
            return existDt.update({ count: existDt.count + 1 });
        }
    };
}
;