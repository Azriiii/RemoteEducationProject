const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplySchema = new Schema({
    Name: {type:String,
    required:true},
    LastName : {type:String,
    required:true},
    Email: {type:String,
    required:true},
    Age: {type:Number,
    required:true},
    Resume: {type:String,
    required:true}
    
}, {timestamps: true})

module.exports = mongoose.model('applys', ApplySchema)