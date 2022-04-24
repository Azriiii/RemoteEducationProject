const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String
      },
    start: {
        type: Date
      },
      end: {
        type: Date
      },
      
}, {timestamps: true})

module.exports = mongoose.model('event', EventSchema)