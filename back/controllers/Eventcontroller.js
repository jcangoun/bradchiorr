const Evenement = require('../models/evenement'),
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY,
utils = require('../utils.js');

exports.createEvent = function (req, res ) {

utils.validateToken(req.token, jwt_secret, function(err, decoded) {

	if (err) 
			res.status(400).json(err);
	else
		{
			Evenement.create(req.body, function(err, newEvenement){
			if (err) 
				res.status(400).json(err);
			else 
				res.status(200).json(newEvenement);
			});

		}
})

	




}