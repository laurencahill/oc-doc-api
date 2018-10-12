const express    = require('express');
const router     = express.Router();
const User       = require('../models/User');
const uploadCloud = require('../config/cloudinary.js');
const multer    = require('multer');
const bcrypt     = require('bcryptjs');
const bcryptSalt = 10;

//show the user's account page
router.get('/account/:id', (req, res, next)=>{
    User.findById(req.params.id)
    .then((userInfo) => {
        res.json({ theUser: userInfo })
    })
    .catch((err) => {
        res.json(err);
    })
})

router.post("/edit/:id", uploadCloud.single('userImage'), (req, res, next) => {
    const userID= req.user.id
    User.findByIdAndUpdate(userID, {
        userImage:      req.file.url,
        username:       req.body.username,
        emailAddress:   req.body.emailAddress,
        firstName:      req.body.firstName,
        lastName:       req.body.lastName,
        userLocation:   req.body.userLocation,
    })
    .then(() => {
        res.json({message: `User has been updated successfully.`});
    })
    .catch((err) => {
        res.json(err);
    })
})

//delete the user account
router.delete("/delete/:id", (req, res, next) => { 
    User.findByIdAndRemove(req.params.id)
    .then(() => {
        console.log("user has been removed successfully", req.params.id)
        res.json({message: `User has been removed successfully.`});
    })
    .catch((err) => {
        res.json(err);
    })
})

module.exports = router;