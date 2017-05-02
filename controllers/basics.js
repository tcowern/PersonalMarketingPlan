var Basics = require('../models/basicsModel');
var mongoose = require('mongoose');
// Task = require('../models/tasksModel');// db.basicss


function addPrefFunction(req, res) {

    console.log('addPref Mongoose connection', mongoose.connection.readyState);
    console.log('addPref Req.body:', req.body);

    if (!req.body.userid) {
        res.send("Error userid is incorrect");
        return;
    }

    Basics.update({
            userid: req.body.userid
        }, {
            $addToSet: {
                preferred: {
                    $each: [req.body.preferred]
                }
            }

        }, {
            upsert: true
        },

        (err, document) => {
            //             res.send(err || document)
            if (err) {
                console.log('Error from addPrefFunction: ', err);
                res.send(err);
            } else {
                console.log("DOCUMENT from addPrefFunction", document);
                res.send(document);
            }
        });
}

function addCertifications(req, res) {

    console.log('addCert Mongoose connection', mongoose.connection.readyState);
    console.log('addCert Req.body:', req.body);

    if (!req.body.userid) {
        res.send("Error userid is incorrect");
        return;
    }

    Basics.update({
            userid: req.body.useridCertifications
        }, {
            $addToSet: {
                certifications: {
                    $each: [req.body.certifications]
                }
            }

        }, {
            upsert: true
        },

        (err, document) => {
            //             res.send(err || document)
            if (err) {
                console.log('Error from addCertifications: ', err);
                res.send(err);
            } else {
                console.log("DOCUMENT from addCertifications", document);
                res.send(document);
            }
        });
}


    //    res.send('We got it on the back end');


    function put(req, res) {
        console.log("req.body", req.body);
        Basics.findByIdAndUpdate(req.body.basicsid, {
            basicsdate: req.body.basicsdate
        }, {
            new: true
        }, (err, document) => {
            // res.send(err || documents)
            if (err) {
                res.send(err);
            } else {
                console.log("DOCUMENT from PUT", document);
                res.send(document);
            }
        });

    }

    function basicsComp(req, res) {
        console.log("basicscomp req.body", req.body);
        Basics.findByIdAndUpdate(req.body.basicsid, {
            basicscomp: req.body.basicscomp
        }, {
            new: true
        }, (err, document) => {
            // res.send(err || documents)
            if (err) {
                res.send(err);
            } else {
                console.log("DOCUMENT from basicscomp", document);
                res.send(document);
            }
        });

    }

    function basicsGroup(req, res) {
        console.log("basicsgroup req.body", req.body);
        Basics.findByIdAndUpdate(req.body.basicsid, {
            topgroup: req.body.topgroup
        }, {
            new: true
        }, (err, document) => {
            // res.send(err || documents)
            if (err) {
                res.send(err);
            } else {
                console.log("DOCUMENT from basicsgroup", document);
                res.send(document);
            }
        });

    }

    function get(req, res) {
        // get One
        if (req.params.id) {
            Basics.findOne({
                _id: req.params.id
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
            Basics.find({
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

    function addBasics(req, res) {

        // console.log("addBasics", req.body);
        var user = req.session.userId;
        console.log("user: ", user);
        var bvar = req.body;
        bvar.userid = user;


        console.log("Edit Input haha: ", bvar);
        var newBasics = new Basics(req.body);
        console.log("newBasics: ", newBasics);
        newBasics.save((err, doc) => {
            if (err) {
                return res.send(err);
            }
            res.send(doc);
            // res.redirect('/index');
            console.log(doc);
        });

    }


    function getUserID(req, res) {
        console.log("req sess: ", req.session);
        return res.send(req.session.userId);
    }



    module.exports = {
        put: put,
        get: get,
        addPrefFunction: addPrefFunction,
        addBasics: addBasics,
        addCertifications: addCertifications,
        getUserID: getUserID,
        basicsComp: basicsComp,
        basicsGroup: basicsGroup
    }

    // module.exports = {
    //     create : (req, res) =>{

    //     },
    // }
