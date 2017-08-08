'use strict';

module.exports = (app) => {
    const { STRING, INTEGER } = app.Sequelize;
    const MoviesDetails = app.model.define('movies_details', {
        name: { type: STRING(100) },
        url: { type: STRING(400) },
        count: { type: INTEGER },
        movie_id: {
            type: INTEGER,
        },
    });
    MoviesDetails.sync({ force: false });
    return MoviesDetails;
};