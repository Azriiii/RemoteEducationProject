const event = require("../models/event.model");
const ValidateEvent = require("../validation/Event.validation");
const AddEvent = async (req, res) => {
  const { errors, isValid } = ValidateEvent(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await event.findOne({ title: req.body.title }).then(async (exist) => {
        if (exist) {
          errors.title = "event Exist";
          res.status(404).json(errors);
        } else {
          await event.create(req.body);
          res.status(201).json({ message: "event  added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllEvents = async (req, res) => {
  try {
    const data = await event.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglEvent= async (req, res) => {
  try {
    const data = await event.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateEvent = async (req, res) => {
  const { errors, isValid } = ValidateEvent(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await event.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteEvent = async (req, res) => {
  try {
    await event.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "event deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddEvent,
  FindAllEvents,
  FindSinglEvent,
  UpdateEvent,
  DeleteEvent,
};