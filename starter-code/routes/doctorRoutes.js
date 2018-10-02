const express        = require("express");
const router         = express.Router();
// const passport       = require("passport");
const Doctor         = require("../models/Doctor");
// const bcrypt         = require("bcrypt");
// const bcryptSalt     = 10;
// const ensureLogin    = require("connect-ensure-login");

//get list of doctors
router.get('/doctors', (req, res, next) => {
        Doctor.find()
        .then((listOfDocs) => {
        res.json({listOfDocs});
        })
        .catch((err) => {
        res.json(err);
        })
    })

//create a new doctor
router.post('/doctors/create', (req, res, next)=>{
    Doctor.create({
        docName:      req.body.docName,
        docLocation:  req.body.docLocation,
        specialties:  req.body.specialties,
        docDetails:   req.body.docDetails,
        // avgRating: req.body.avgRating,
        //docImage:   req.file.url,
    })
        .then(response => {
        res.json(response);
        })
        .catch(err => {
        res.json(err);
        })
});

//edit a doctor's details
router.put('/doctors/edit/:id', (req, res, next)=>{
    Doctor.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
        res.json({message: `Doctor has been updated successfully.`});
        })
        .catch(err => {
        res.json(err);
        })
})

//show a doctor's details
router.get('/doctors/:id', (req, res, next)=>{
    Doctor.findById(req.params.id)
        .then(response => {
        res.json(response);
        })
        .catch(err => {
        res.json(err);
        })
})

router.delete('/doctors/delete/:id', (req, res, next)=>{
    Doctor.findByIdAndRemove(req.params.id)
        .then(() => {
        res.json({message: `Doctor has been removed successfully.`});
        })
        .catch(err => {
        res.json(err);
        })
})

module.exports = router;