const Lessons = require("../models/lesson.models");
const ValidateLesson = require("../validation/Lesson.validation");
const AddLesson = async(req, res) => {
    const { errors, isValid } = ValidateLesson(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            await Lessons.findOne({ titre: req.body.titre }).then(async(exist) => {
                if (exist) {
                    errors.titre = "Lesson Exist";
                    res.status(404).json(errors);
                } else {
                    await Lessons.create(req.body);
                    res.status(201).json({ message: "Lesson added with success" });
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
};

const FindAllLessons = async(req, res) => {
    try {
        const data = await Lessons.find();
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
};

const FindSinglLesson = async(req, res) => {
    try {
        const data = await Lessons.findOne({ _id: req.params.id });
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
};

const UpdateLesson = async(req, res) => {
    const { errors, isValid } = ValidateLesson(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            const data = await Lessons.findOneAndUpdate({ _id: req.params.id },
                req.body, { new: true }
            );
            res.status(201).json(data);
        }
    } catch (error) {
        console.log(error.message);
    }
};

const DeleteLesson = async(req, res) => {
    try {
        await Lessons.deleteOne({ _id: req.params.id });
        res.status(201).json({ message: "Lessons deleted with success" });
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = {
    AddLesson,
    FindAllLessons,
    FindSinglLesson,
    UpdateLesson,
    DeleteLesson,
};