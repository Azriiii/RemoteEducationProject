const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
   
    titre: {
        type: String,
    },
    description: {
        type: String,
    },
    dateCreation: {
        type: Date,
        min: "1987-09-28",
    },
});

module.exports = Lesson = mongoose.model('lesson', LessonSchema);