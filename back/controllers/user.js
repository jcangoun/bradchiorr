const User = require('../models/user'),
evenement = require('../models/evenement'),
media = require('../models/media'),
typEvent = require('../models/typEvent');
/*Utils = require('../utils');*/   /*utils est a verifier , on n'en a pas besoin je pense. */

bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
bearerToken = require('express-bearer-token');

//

const jwt_secret = process.env.JWT_SECRET_KEY,
jwt = require('jsonwebtoken');

exports.getAll = function(req, res) {
    let isAdmin = Utils.isAdmin(req.token);
    if (!isAdmin)
        res.status(401).json('no token provided');
    else {
        User.find({}, function(err, users) {
            if (err)
                res.status(400).json(err);
            else
                res.status(200).json(users);
        });
    }
}

exports.getById = function(req, res) {
    let checkToken = Utils.validateToken(req.token);
    let dataToken = Utils.getTokenData(req.token);

    if (!checkToken)
        res.status(401).json('no token provided');
    else {
        User.find({_id: dataToken.id}, function(err, user) {
            if (err)
                res.status(400).json(err);
            else
                res.status(200).json(user);
        });
    }
}

exports.addMedia = function (req, res) {
    jwt.verify(req.token, jwt_secret, function(err, decoded) {
        if (err)
            res.status(400).json(err)
        else {
            if (!req.file)
                res.status(403).json('no file provided');
            else {
                console.log(req.file);
                Media.create({fileName: req.file.filename, user: decoded.id}, function(err, newMedia) {
                    if (err)
                        res.status(400).json(err);
                    else
                        res.status(201).json("media created successfully");
                })
            }
        }
    });
}

exports.getMedias = function (req, res) {
    jwt.verify(req.token, jwt_secret, function(err, decoded) {
        if (err)
            res.status(400).json(err);
        else {
            Media.find({}, function(err, medias) {
                if (err)
                    res.status(400).json(err);
                else
                    res.status(200).json(medias);
            });
        }
    });
}


