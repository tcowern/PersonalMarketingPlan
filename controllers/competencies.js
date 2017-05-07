var Competencies = require('../models/competenciesModel');
var mongoose = require('mongoose');

function get(req, res) {
    
    console.log('Hit get in competencies controller')
    
    
//     get One
    
    if (req.params.id) {
        console.log('Competencies req.params'. req.params);
        Competencies.findOne({
            userid: req.params.id
        }, (err, document) => {
            if (err) {
                // if(err.name === "CastError" && err.kind === "ObjectId"){
                //     return res.send(`That ain't no ID`)
                // }

                return res.send(err);
            }
            if (!document) {
                return res.send('No one with that id')
            }
            // console.log("Get Doc: ", document);
            res.send(document);
        });
    }
    // get Many
    else {
        console.log('Competencies else');
        console.log('Competencies Userid', req.session.userId)
        Competencies.find({
            userid: req.session.userId
            
        }, (err, document) => {
            // res.send(err || documents)
            if (err) {
                return res.send(err);
            }
            res.send(document);
        });
    }
}


module.exports = {
    get: get,
}