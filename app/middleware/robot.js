'use strict';

module.exports = options => {
    return function* (next) {
        const source = this.get('user-agent') || '';
        const match = options.ua.some(ua => ua.text(source));
        if (match) {
            this.status = 403;
            this.message = 'Go away,robot.';
        } else {
            yield next;
        }
    };
};