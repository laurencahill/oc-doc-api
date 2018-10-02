const express    = require('express');
const router     = express.Router();
const User       = require('../models/User');
const uploadCloud = require('../config/cloudinary.js');
const multer    = require('multer');
const bcrypt     = require('bcryptjs');
const bcryptSalt = 10;

//show the user's account page
router.get('/account', (req, res, next)=>{
    User.findById(req.user._id)
    .then((userInfo) => {
        res.json({ theUser: userInfo })
    })
    .catch((err) => {
        res.json(err);
    })
})

//edit the user account info

// router.get("/edit", (req, res, next) => {
//     if (!req.user) {
//         res.status(400).json({ message: 'Specified id is not valid' });
//         return;
//     }
//     User.findById(req.user._id)
//     .then((userInfo) => {
//         res.json({ theUser: userInfo })
//     })
//     .catch((err) => {
//         next(err);
//     })
// })

router.post("/edit", uploadCloud.single('photo'), (req, res, next) => {
   
const userID= req.user._id
    User.findByIdAndUpdate(userID, {
        firstName:      req.body.firstName,
        lastName:       req.body.lastName,
        // userImage:      req.file.url,
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
    if (!req.user) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json({message: `User has been removed successfully.`});
    })
    .catch((err) => {
        res.json(err);
    })
})

module.exports = router;