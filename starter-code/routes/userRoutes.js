const express        = require("express");
const userRoutes     = express.Router();
const User           = require("../models/User");
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const ensureLogin    = require("connect-ensure-login");

//sign up routes

// userRoutes.get("/signup", (req, res, next) => {
//   res.render("/signup");
// });

userRoutes.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "" || password === "") {
    res.render("/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username })
  .then(user => {
    if (user !== null) {
      res.render("/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save((err) => {
      if (err) {
        res.render("/signup", { message: "Something went wrong" });
      } else {
        res.redirect("/");
      }
    });
  })
  .catch(error => {
    next(error)
  })
});

//login routes

userRoutes.get("/login", (req, res, next) => {
    res.render("/login");
  });
  
userRoutes.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  }));


//generates protected routes with ensure login, keep below all other routes

userRoutes.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("private", { user: req.user });
  });


module.exports = userRoutes;