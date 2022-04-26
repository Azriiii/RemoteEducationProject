const Applys = require("../models/applys.models");
const ValidateApply = require("../validation/Applys.validations");
const AddApply = async (req, res) => {
  const { errors, isValid } = ValidateApply(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Applys.findOne({ Title: req.body.Title }).then(async (exist) => {
        if (exist) {
          errors.Title = "Application Exist";
          res.status(404).json(errors);
        } else {
          await Applys.create(req.body);
          res.status(201).json({ message: "Application added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllApplys = async (req, res) => {
  try {
    const data = await Applys.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglApply = async (req, res) => {
  try {
    const data = await Applys.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateApply = async (req, res) => {
  const { errors, isValid } = ValidateApply(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Applys.findOneAndUpdate(
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

const DeleteApply = async (req, res) => {
  try {
    await Applys.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Apply deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddApply,
  FindAllApplys,
  FindSinglApply,
  UpdateApply,
  DeleteApply,
};