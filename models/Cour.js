const mongoose = require('mongoose');

const CourSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
},

desc: {
    type: String,
    required: true
},


nbrParticipants: {
    type: Number,
    required: true
},
  published_date: {
    type: Date
  },
 
  updated_date: {
    type: Date,
    default: Date.now
  },
  modalite: {
    type: String,
    required: true
},
});

module.exports = Cour = mongoose.model('cour', CourSchema);
