const express        = require("express");
const router         = express.Router();
const Doctor         = require("../models/Doctor");
const uploadCloud    = require('../config/cloudinary.js');
const multer         = require('multer');

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
router.post('/doctors/create', uploadCloud.single('docImage'), (req, res, next)=>{
    Doctor.create({
        docImage:     req.file.url,
        docName:      req.body.docName,
        specialties:  req.body.specialties,
        docDetails:   req.body.docDetails,
        docCity:      req.body.docCity,
        docState:     req.body.docState,
    })
        .then(response => {
        res.json(response);
        })
        .catch(err => {
        res.json(err);
        })
});

//edit a doctor's details
router.put('/doctors/edit/:id', uploadCloud.single('docImage'), (req, res, next)=>{
    Doctor.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
        res.json({message: `Doctor has been updated successfully.`});
        })
        .catch(err => {
        res.json(err);
        })
})


//edit a doctor's details
router.get('/doctors/edit/:id', (req, res, next)=>{
    Doctor.findById(req.params.id, req.body)
        .then(response => {
        console.log(response);
        res.json(response);
        })
        .catch(err => {
        res.json(err);
        })
})

//show a doctor's details
router.get('/doctors/:id', (req, res, next)=>{
    Doctor.findById(req.params.id).populate({
        path: 'docComments',
        populate: {
            path: 'author',
            model: 'User',
        }}
    
    )
        .then(response => {
        console.log(response);
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