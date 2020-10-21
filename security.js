const jwt     = require('jsonwebtoken');

const secret = 'secret';

const verifyAuthToken = (token) => {
    var decoded = jwt.verify(token,secret);
    console.log('decoded = ',decoded);
    return decoded;
};

module.exports = {verifyAuthToken};
