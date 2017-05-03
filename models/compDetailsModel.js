var mongoose = require('mongoose');

taskSchema = new mongoose.Schema({
    competencyid: {type: mongoose.Schema.ObjectId, ref: "Competencies"},
    details : {type : Array, default : []}
});

module.exports = mongoose.model('CompDetails', taskSchema);