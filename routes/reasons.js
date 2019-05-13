const express = require('express');
const router = express.Router();
const config = require('../config/database');

//Schema for reason bson document
const Reason = require('../model/reasonDB.js');

//add new reasons to database
router.post('/addnew', (req, res, next) => {
    //Create new reason json object
    let newReason = {
        //the actual string containing the reason
        reason: req.body.reason
    };
    Reason.addReason(newReason, (err, reason) => {
        //Check for error response from database insertion
        if(err)
        {
            //Return JSON indicating failure to frontend
            res.json({success: false, msg:'Failed to add new reason'});
        }
        else
        {
            //Return JSON indicating success to frontend
            res.json({success: true, msg:'Successfully added new reason'});
        }
    });
});

router.get('/getreasons', (req, res, next) => {
    Reason.getReasons((err, reasons) => {
        if(err){
            res.json({success: false, msg:'Failed to get reasons'});
        }
        else {
            res.json(reasons);
        }
    });
});

//Export router for access to routes
module.exports = router;
