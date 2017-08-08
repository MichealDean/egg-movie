'use strict';

module.exports = (app) => {
    const { STRING, INTEGER } = app.Sequelize;
    const Movies = app.model.define('movies', {
        name: { type: STRING(100) },
        href: { type: STRING(200) },
        count: { type: INTEGER },
        img: { type: STRING(200) },
        remoteAddress: { type: STRING(50) },
    });
    Movies.sync({ force: false });
    return Movies;
};