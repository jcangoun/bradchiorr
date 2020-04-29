const express = require('express'),
mongoose = require('mongoose'),

bcrypt = require('bcrypt'),
auth = require('auth'),
jwt = require('jsonwebtoken'), /* no need de jwt pour les paiement ca*/
/*bodyParser = require('body-parser'),*/

cors = require('cors'),
/*bearerToken = require('express-bearer-token'),*/
port = 3050;
app = express();
require('dotenv').config();

/*app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(bearerToken());*/

const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

/* Maintenant il manque les autres const ( jwt et toouuut etc ....) */

                                                      // Je DEVRAI FAIRE LES ROUTES  REQ.BOY ET OUT EN UTILISANT LES NOMS DS JMERISE.

/*app.use(express.static(__dirname + '/uploads'));*/


mongoose.connect('mongodb://localhost/bradchiorrProj', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

AuthController = require('./controllers/auth');
UserController = require('./controllers/user');

app.route('/auth/login').post(AuthController.login);
app.route('/auth/register').post(AuthController.register);

// test function

app.route('/').get(function(req, res){
    res.send('hello world !');
});


// Apres ici on met les routes pour les authentifications ..  ci dessous     ..




// L'authentification finit juste en haut                                   .....


// Ici c est l'user qui commence en bas                        ...... 




// et l'user est fini juste là haut                            ......

// Et on met le media Dans ce Bloc Inter messages             .........


// Event : 

// Route to create a new event : 
app.route('/newevent').post(Eventcontroller.createEvent);  /*Les details persos sont a inserer */

// Route to find an event by id : 
app.route('/eventbyid').get(Eventcontroller.findEventById);

// Route to find all events : 
app.route('/eventall').get(Eventcontroller.findAllEvent); 

// Route to find an event by name : 
app.route('/eventname').get(Eventcontroller.findEventName); 

// Route to find events by tags : 
app.route('/eventbytag').get(Eventcontroller.findEventTag);

// Route to find events by date : 
app.route('/eventbydate').get(Eventcontroller.findEventbyDate); 

// Route to update an event by id : 
app.route('/changevent').put(Eventcontroller.updateEvent); 

// Route to delete an event by id : 
app.route('/deletevent').delete(Eventcontroller.deleteEvent);  /*Les details perso sont a inserer */

// //  le media finit ici                                     .........

/*app.route('/users/list').get(UserController.getAll);
app.route('/users/me').get(UserController.getById);

app.route('/media/upload').post(upload.single('media'), UserController.addMedia);
app.route('/medias').get(UserController.getMedias);*/


app.listen(port);
