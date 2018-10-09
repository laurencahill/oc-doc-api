const express           = require("express");
const router            = express.Router();
const Location          = require("../models/Location");
const Doctor            = require("../models/Doctor");

//get list of locations
router.get('/locations', (req, res, next) => {
        Location.find()
        .then((listOfLocations) => {
        res.json({listOfLocations});
        })
        .catch((err) => {
        res.json(err);
        })
    })

//create a new doctor
router.post('/locations/create', (req, res, next)=>{
    Location.create({
        locationName:  req.body.locationName,
        address:       req.body.address,
        city:          req.body.city,
        state:         req.body.state,
        zip:           req.body.zip,
        phone:         req.body.phone,
        url:           req.body.url,
        doctorID:      req.body.doctorID,
    })
        .then(response => {
        res.json(response);
        })
        .catch(err => {
        res.json(err);
        })
});

//edit a location's details
router.put('/locations/edit/:id', (req, res, next)=>{
    Location.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
        res.json({message: `Location has been updated successfully.`});
        })
        .catch(err => {
        res.json(err);
        })
})

//show a location's details
router.get('/locations/:id', (req, res, next)=>{
    Location.findById(req.params.id)
        .then(response => {
        res.json(response);
        })
        .catch(err => {
        res.json(err);
        })
})

router.delete('/locations/delete/:id', (req, res, next)=>{
    Location.findByIdAndRemove(req.params.id)
        .then(() => {
        res.json({message: `Location has been removed successfully.`});
        })
        .catch(err => {
        res.json(err);
        })
})

module.exports = router;