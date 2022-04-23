const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    Type: String,
    Title : String,
    Description: String,
    Skill: String
}, {timestamps: true})

module.exports = mongoose.model('jobs', JobSchema)