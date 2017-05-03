var mongoose = require('mongoose');

competenciesSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    competencies: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Competencies', competenciesSchema);
