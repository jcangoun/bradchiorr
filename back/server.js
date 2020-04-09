const express = require('express'),
mongoose = require('mongoose'),

bcrypt = require('bcrypt'),
auth = require('auth'),
/*jwt = require('jsonwebtoken'), no need de jwt pour les paiement ca*/
/*bodyParser = require('body-parser'),*/

cors = require('cors'),
/*bearerToken = require('express-bearer-token'),*/
port = 3000;
app = express();
require('dotenv').config();

/*app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(bearerToken());*/

/*const multer = require('multer');
const upload = multer({ dest: 'uploads/' });*/

                                                      // Je DEVRAI FAIRE LES ROUTES  REQ.BOY ET OUT EN UTILISANT LES NOMS DS JMERISE.

/*app.use(express.static(__dirname + '/uploads'));*/


mongoose.connect('mongodb://localhost/bradchiorrProj', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

AuthController = require('./controllers/auth');
UserController = require('./controllers/user');

/*app.route('/auth/login').post(AuthController.login);
*//*app.route('/auth/register').post(AuthController.register);*/

/*app.route('/users/list').get(UserController.getAll);
app.route('/users/me').get(UserController.getById);

app.route('/media/upload').post(upload.single('media'), UserController.addMedia);
app.route('/medias').get(UserController.getMedias);*/


app.listen(port);
