// Chargement des variables d'environnement (.env)
require('dotenv').config();

// Connexion à la base MongoDB
require('./models/connection');

// Import des modules
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

// Import des routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var outfitsRouter = require('./routes/outfits');
var clothesRouter = require('./routes/clothes');

var app = express();

// --- ⚙️ Middlewares globaux --- //

// Logger pour les requêtes HTTP
app.use(logger('dev'));

// Autoriser CORS (⚠️ nécessaire pour Expo Go)
app.use(cors({
  origin: '*', // ou 'http://localhost:8081' si tu veux restreindre
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Gestion du JSON et des formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Gestion des cookies
app.use(cookieParser());

// Gestion de l’upload de fichiers
app.use(fileUpload());

// Fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// --- 🔗 Routes --- //
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/outfits', outfitsRouter);
app.use('/clothes', clothesRouter);

// Export de l’app
module.exports = app;
