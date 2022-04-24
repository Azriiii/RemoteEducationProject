const Jobs = require("../models/jobs.models");
const ValidateJob = require("../validation/Jobs.validations");
const AddJob = async (req, res) => {
  const { errors, isValid } = ValidateJob(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Jobs.findOne({ Title: req.body.Title }).then(async (exist) => {
        if (exist) {
          errors.Title = "Job Exist";
          res.status(404).json(errors);
        } else {
          await Jobs.create(req.body);
          res.status(201).json({ message: "Job added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllJobs = async (req, res) => {
  try {
    const data = await Jobs.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglJob = async (req, res) => {
  try {
    const data = await Jobs.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateJob = async (req, res) => {
  const { errors, isValid } = ValidateJob(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Jobs.findOneAndUpdate(
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

const DeleteJob = async (req, res) => {
  try {
    await Jobs.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Job deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddJob,
  FindAllJobs,
  FindSinglJob,
  UpdateJob,
  DeleteJob,
};