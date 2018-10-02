require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const flash          = require("connect-flash");
const session        = require("express-session");
const bcrypt         = require("bcryptjs");
const passport       = require("passport");
const LocalStrategy  = require("passport-local").Strategy;
const User           = require('./models/User')
const MongoStore     = require('connect-mongo')(session);

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/oc-doc-app', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

//passport setup
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
  console.log('pass: ', password)
  User.findOne({ username }, (err, user) => {
    if (err) {
      console.log('err in login: ', err)
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }
    return next(null, user, {message: 'you have successfully logged in'});
  });
}));
     
app.use ((req, res, next)=> {
  res.locals.currentUser = req.user;
  next();
})

app.use(flash());

app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = 'OcDoc App';

const index = require('./routes/index');
app.use('/', index);
const userRoutes= require('./routes/userRoutes');
app.use('/', userRoutes);
const locationRoutes = require('./routes/locationRoutes');
app.use('/', locationRoutes);
const doctorRoutes = require('./routes/doctorRoutes');
app.use('/', doctorRoutes);
const commentRoutes = require('./routes/commentRoutes');
app.use('/', commentRoutes);


module.exports = app;