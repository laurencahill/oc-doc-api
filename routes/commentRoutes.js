const express           = require("express");
const router            = express.Router();
const Comment           = require("../models/Comment");
const Doctor            = require("../models/Doctor");

//create a new comment
router.post('/doctors/:id', (req, res, next)=>{

    Comment.create({
        author:        req.user._id,
        visitDate:     req.body.visitDate,
        rating:        req.body.rating,
        visitReason:   req.body.visitReason,
        comment:       req.body.comment,
        doctorID:      req.params.id,
        uploadDate:    req.body.uploadDate,
    })
        .then(comment => {
        Doctor.findByIdAndUpdate(req.params.id, {$push: {docComments: comment._id}}).populate("docComments")
            .then((theDoctor)=>{
                const theAverage = theDoctor.docComments.reduce((a,b) => {
                return a + b.rating
                }, 0) / theDoctor.docComments.length;
                theDoctor.avgRating = theAverage
                theDoctor.save()
                .then((theAverage)=> {
                    res.json(theAverage);
                })
                .catch((err)=>{
                    res.json(err);
                })
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
                    .then((response)=>{
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