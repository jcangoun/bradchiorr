
const jwt = require('jsonwebtoken');

exports.validateToken = function(token, jwt_secret, callback) {
    
    jwt.verify(token, jwt_secret, function(err, decoded) {
        console.log(err);
        if (err)
            callback(err, decoded);
        else {
            callback(null, decoded);
        }
    });
}

exports.isAdmin = function(token) {
    if (token.admin)
        return true;
    else
        return false;
}

exports.getTokenData = function(token) {
    jwt.verify(token, jwt_secret, function(err, decoded) {
        if (err)
            return false;
        else
            return decoded;
    });
}
