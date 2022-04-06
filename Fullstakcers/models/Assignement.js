const mongoose = require('mongoose');

const AssignementSchema = new mongoose.Schema({

    As_name: {
        type: String,
        required: true 
    },

    As_desc: {
        type: String,
        required: false
    },

    As_type: {
        type: String,
        required: true
    },
    
   

    As_attach: {
        type: String,
        required: false
    },

    As_user: {
        type: String,
        required: true
    }


});

module.exports = Asgn = mongoose.model('asgn', AssignementSchema);