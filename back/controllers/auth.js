const User = require('../models/user'),
bcrypt = require('bcrypt'), 
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;
adm_login = process.env.ADMIN_LOGIN; 
adm_password = process.env.ADMIN_PASSWORD;




      exports.register = function (req, res) {
           let hash = bcrypt.hashSync(req.body.password, 10);
           req.body.password = hash;
           



           //Ce qui suit en dessous faut voir mettre ou enlever atester 

           User.create(req.body, function(err, newUser) {
               if (err)
                res.status(400).json(err);
            else
                res.status(200).json(newUser);
        });
    }

                     /*la partie d inscription est a voir  puisque normalement il n'y a de comptes inscriptions */

                     //On fait la partie login / l'admin s'identifie je pense.


exports.login = function(req, res){

    User.findOne({email: req.body.email}, function(err, user){

        if (err)
            res.status(400).json({auth: false, message: 'There is any err'}); 

        else if (!user)
            res.status(201).json({auth: false, message: 'No user found'}); 

        else {
            bcrypt.compare(req.body.password, user.password, function(err, result){
                if (result) {
                    let token = jwt.sign({id: user._id, admin: user.admin}, jwt_secret, {expiresIn: '24h'}); 
                    res.status(200).json({auth: true, user: user, token: token}); 
                        
                        console.log(token)
                }

                else
                    res.status(400).json({auth: false, message: 'Your email or password do not exist'}); 
            })
        }
    });
};



// Deconnection de l'user 

exports.logout = function (req, res){

    if(req.token){
        
        Blacklist.create({token: req.token}, function(err, result){
            res.status(200).json ("Logout successfully"); 
        })
    }
}