const User = require('../models/user'),
bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

exports.login = function (req, res) {
    console.log(req.body.email);
    User.findOne({email: req.body.email}, function(err, user) {
        if (err)
            res.status(400).json({auth: false, message: err});
        else if (!user)
            res.status(401).json({auth: false, message: "no user finded"});
        else {
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (result)
                {
                    var token = jwt.sign({id: user._id, admin: user.admin }, jwt_secret);
                    res.status(200).json({auth: true, token: token});
                }
                else
                    res.status(201).json({auth: false, message: "password not match"});
            })
        }
    });
}

    /*  exports.register = function (req, res) {
           let hash = bcrypt.hashSync(req.body.password, 10);
           req.body.password = hash;
           User.create(req.body, function(err, newUser) {
               if (err)
                res.status(400).json(err);
            else
                res.status(200).json(newUser);
        });
    }

    */                 /*la partie d inscription est a voir  puisque normalement il n'y a de comptes inscriptions */
