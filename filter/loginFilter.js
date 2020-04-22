const url = require('url');


const loginFilter = (req, res) => {
    const pathName = url.parse(req.url).pathname;
    return pathName === '/login.html' || pathName === './login';
};

module.exports = loginFilter;