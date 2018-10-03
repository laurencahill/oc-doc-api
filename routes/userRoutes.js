const express        = require("express");
const userRoutes     = express.Router();
const passport       = require("passport");
const User           = require("../models/User");
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const ensureLogin    = require("connect-ensure-login");

//sign up routes

userRoutes.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userLocation = req.body.userLocation;
  const emailAddress = req.body.emailAddress;

  if (username === "" || password === "") {
    res.json({ message: "Indicate username and password." });
    return;
  }

  User.findOne({ username })
  .then(user => {
    if (user !== null) {
      res.json({ message: "The username already exists." });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      firstName,
      lastName,
      userLocation,
      emailAddress,
    });

    newUser.save((err) => {
      if (err) {
        res.json({ message: "Something went wrong." });
        return; 
      }
      res.json(newUser);
    });
  })
  .catch(error => {
    res.json(error);
  })
});

//login & logout routes

userRoutes.post('/login', (req, res, next) => {
passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
        res.status(500).json({ message: 'Something went wrong authenticating the user.' });
        return;
    }

    if (!theUser) {
        res.status(401).json(failureDetails);
        return;
    }
    // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save did not work.' });
                return;
            }
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

userRoutes.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Log out successful!' });
});

userRoutes.get('/loggedin', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

//generates protected routes with ensure login, keep below all other routes

userRoutes.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.json({ user: req.user });
  });


module.exports = userRoutes;