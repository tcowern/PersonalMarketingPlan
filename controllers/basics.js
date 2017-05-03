var Basics = require('../models/basicsModel');
var mongoose = require('mongoose');

function addBasicInfo(req, res) {
    console.log('addBasicInfo: ', req.body);
    switch (req.body.infoType) {
        case 'preferred':
            console.log('you hit preferred');
            Basics.update({
                    userid: req.body.userid
                }, {
                    $addToSet: {
                        preferred: {
                            $each: [req.body.infoType]
                        }
                    }

                }, {
                    upsert: true
                },

                (err, document) => {
                    //             res.send(err || document)
                    if (err) {
                        console.log('Error from addpreferred: ', err);
                        res.send(err);
                    } else {
                        console.log("DOCUMENT from addPreferred", document);
                        res.send(document);
                    }
                });
            break;
        case 'certifications':
            console.log('you hit certifications');
            console.log('userid: ', req.body.userid);
            Basics.update({
                    userid: req.body.userid
                }, {
                    $addToSet: {
                        certifications: {
                            $each: [req.body.infoStr]
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
            break;
        case 'attributes':
            console.log('you hit attributes');
            Basics.update({
                    userid: req.body.userid
                }, {
                    $addToSet: {
                        attributes: {
                            $each: [req.body.infoStr]
                        }
                    }

                }, {
                    upsert: true
                },

                (err, document) => {
                    //             res.send(err || document)
                    if (err) {
                        console.log('Error from addAttributes: ', err);
                        res.send(err);
                    } else {
                        console.log("DOCUMENT from addAttributes", document);
                        res.send(document);
                    }
                });
            break;
            case 'employment':
            console.log('you hit employment');
            Basics.update({
                    userid: req.body.userid
                }, {
                    $addToSet: {
                        employment: {
                            $each: [req.body.infoStr]
                        }
                    }

                }, {
                    upsert: true
                },

                (err, document) => {
                    //             res.send(err || document)
                    if (err) {
                        console.log('Error from employment: ', err);
                        res.send(err);
                    } else {
                        console.log("DOCUMENT from employment", document);
                        res.send(document);
                    }
                });
            break;
            case 'statement':
            console.log('you hit statement');
            Basics.update({
                    userid: req.body.userid
                }, {
                    $addToSet: {
                        statement: {
                            $each: [req.body.infoStr]
                        }
                    }

                }, {
                    upsert: true
                },

                (err, document) => {
                    //             res.send(err || document)
                    if (err) {
                        console.log('Error from statement: ', err);
                        res.send(err);
                    } else {
                        console.log("DOCUMENT from statement", document);
                        res.send(document);
                    }
                });
            break;
            case 'objective':
            console.log('you hit objective');
            Basics.update({
                    userid: req.body.userid
                }, {
                    $addToSet: {
                        objective: {
                            $each: [req.body.infoStr]
                        }
                    }

                }, {
                    upsert: true
                },

                (err, document) => {
                    //             res.send(err || document)
                    if (err) {
                        console.log('Error from objective: ', err);
                        res.send(err);
                    } else {
                        console.log("DOCUMENT from objective", document);
                        res.send(document);
                    }
                });
            break;
            case 'targets':
            console.log('you hit targets');
            Basics.update({
                    userid: req.body.userid
                }, {
                    $addToSet: {
                        targets: {
                            $each: [req.body.infoStr]
                        }
                    }

                }, {
                    upsert: true
                },

                (err, document) => {
                    //             res.send(err || document)
                    if (err) {
                        console.log('Error from targets: ', err);
                        res.send(err);
                    } else {
                        console.log("DOCUMENT from targets", document);
                        res.send(document);
                    }
                });
            break;
            case 'important':
            console.log('you hit important');
            Basics.update({
                    userid: req.body.userid
                }, {
                    $addToSet: {
                        important: {
                            $each: [req.body.infoStr]
                        }
                    }

                }, {
                    upsert: true
                },

                (err, document) => {
                    //             res.send(err || document)
                    if (err) {
                        console.log('Error from important: ', err);
                        res.send(err);
                    } else {
                        console.log("DOCUMENT from important", document);
                        res.send(document);
                    }
                });
            break;
            
    }

}



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
    addBasicInfo: addBasicInfo,
    //    addPrefFunction: addPrefFunction,
    addBasics: addBasics,
    //    addCertifications: addCertifications,
    getUserID: getUserID,
    basicsComp: basicsComp,
    basicsGroup: basicsGroup
}

// module.exports = {
//     create : (req, res) =>{

//     },
// }
