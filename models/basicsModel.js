var mongoose = require('mongoose');

 basicsSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.ObjectId, ref: "User"},
    preferred:{type : Array, default : []},
    certifications : {type : Array, default : []},
    attributes : {type : Array, default : []},
    employment : {type : Array, default : []},
    statement: {type : Array, default : []},
    objective: {type : Array, default : []},
    targets: {type : Array, default : []},
    important: {type : Array, default : []}

});

module.exports = mongoose.model('Basics', basicsSchema);
