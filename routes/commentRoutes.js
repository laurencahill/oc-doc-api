const express           = require("express");
const router            = express.Router();
// const passport       = require("passport");
const Comment           = require("../models/Comment");
const Doctor            = require("../models/Doctor");
// const bcrypt         = require("bcrypt");
// const bcryptSalt     = 10;
// const ensureLogin    = require("connect-ensure-login");


//create a new comment
router.post('/doctors/:id', (req, res, next)=>{
    Comment.create({
        author:        req.body.author,
        uploadDate:    req.body.uploadDate,
        visitDate:     req.body.visitDate,
        rating:        req.body.rating,
        visitReason:   req.body.visitReason,
        comment:       req.body.comment,
        doctorID:      req.body.doctorID,
    })
        .then(comment => {
        res.json(comment)
        Doctor.findByIdAndUpdate(req.params.id, { $push: {docComments: comment._id} } )
            .then((response)=>{
            })
            .catch((err)=>{
            res.json(err)
            })
            })
        .catch(err => {
        res.json(err);
        })
});

//delete the comment
router.delete('/doctors/:id', (req, res, next) => {
   const theCommentID = req.body.commentId 
    Comment.findByIdAndRemove(theCommentID)
        .then(() => {
        res.json({ message: `Comment has been removed successfully.` });
            let doctorID = req.params.id;
        Doctor.findById(doctorID, )
                .then((doctorInfo) => {
                  doctorInfo.docComments =  doctorInfo.docComments.filter((eachId) => !eachId.equals(theCommentID))
                  doctorInfo.save()
                    .then((respnse)=>{
                    })
                    .catch((err)=>{
                    res.json(err);
                    })
                })
                .catch (err => {
                res.json(err);
                })
        })
        .catch(err => {
        res.json(err);
        })
 });

module.exports = router;