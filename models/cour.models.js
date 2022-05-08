const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;
const CourSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
},
prix: {
  type: Number,
  required: true
},

category: {
  type: String,

},
user: {
  type: String,
  required: true
},
nbrlesson: {
  type: Number,
  required: true
},


  published_date: {
    type : Date 
  },
  desc: {
    type: String,
    required: true
  },
 
  modalite: {
    type: String,
    required: true
},
avatar: {
  type: String,
  required: true
},
bandeColor: {
  type: String,
  required: true
},


});

module.exports = Cour = mongoose.model('cour', CourSchema);
