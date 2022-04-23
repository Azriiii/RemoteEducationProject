const Cours = require("../models/cour.models");
const ValidateCour = require("../validation/Cour.validation");
const AddCour = async (req, res) => {
  const { errors, isValid } = ValidateCour(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Cours.findOne({ titre: req.body.titre }).then(async (exist) => {
        if (exist) {
          errors.titre = "Cour Exist";
          res.status(404).json(errors);
        } else {
          await Cours.create(req.body);
          res.status(201).json({ message: "Cour added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllCours = async (req, res) => {
  try {
    const data = await Cours.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglCour = async (req, res) => {
  try {
    const data = await Cours.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateCour = async (req, res) => {
  const { errors, isValid } = ValidateCour(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Cours.findOneAndUpdate(
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

const DeleteCour = async (req, res) => {
  try {
    await Cours.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Cours deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = {
  AddCour,
  FindAllCours,
  FindSinglCour,
  UpdateCour,
  DeleteCour,
};
