'use strict';

const axios = require('axios');
const request = require('request');
const cheerio = require('cheerio');

const getSearchId = Symbol('searchID');
const saveAndUpdate = Symbol('saveAndUpdate');


module.exports = (app) => {
    return class Search extends app.Service {

        async searchALl (searchName) {
            let { config, ctx } = this;

            let searchId = await this[getSearchId](searchName, config.searchUri);
            let resources = await axios.get(`${config.searchUri}/e/search/${searchId}`);

            let resourcesItems = [];
            let $ = cheerio.load(resources.data);
            $('.channel-content a img').each((index, element) => {
                resourcesItems.push({
                    href: element.parent.attribs.href,
                    name: element.attribs.alt,
                    img: element.attribs.src,
                    remoteAddress: ctx.ip,
                });
            });
            let items = resourcesItems.map(async (v) => {
                return await this[saveAndUpdate](v);
            });
            resourcesItems = [];
            for (let item of await Promise.all(items)) {
                resourcesItems.push({
                    href: `${this.config.currentUri}/searchitem/${item.id}`,
                    name: item.name,
                    img: item.img,
                });
            }
            return resourcesItems;
        }

        /**
         * 通过content获取searchId
         * @param content
         * @returns {Promise}
         */
        [getSearchId] (searchName) {
            return new Promise((resolve, reject) => {
                request.post(`${this.config.searchUri}/e/search/`, {
                    form: {
                        tbname: 'movie',
                        classid: '1,2,3,4',
                        show: 'title,tpinyin,actor',
                        keyboard: searchName,
                    },
                }, (err, response, body) => {
                    if (err) {
                        return reject(err);
                    }
                    let $ = cheerio.load(body);
                    let url = $('a').attr('href');
                    return resolve(url);
                });
            });
        }

        /**
         * 搜索内容保存至mysql(movies)
         * @param db
         * @param item
         * @returns {item}
         */

        async [saveAndUpdate] (item) {
            let existDt = await this.ctx.model.Movies.findOne({
                where: {
                    href: item.href,
                    name: item.name,
                    img: item.img,
                    remoteAddress: item.remoteAddress,
                },
            });
            if (!existDt) {
                item.count = 1;
                return await this.ctx.model.Movies.create(item);
            }
            return existDt.update({ count: existDt.count + 1 });
        }
    };
};
