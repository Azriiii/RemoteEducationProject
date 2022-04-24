const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateJob(data) {
  let errors = {};
  data.Type = !isEmpty(data.Type) ? data.Type : "";
  data.Title = !isEmpty(data.Title) ? data.Title : "";
  data.Description = !isEmpty(data.Description) ? data.Description : "";
  data.Skill = !isEmpty(data.Skill) ? data.Skill : "";
 
  if (validator.isEmpty(data.Type)) {
    errors.Type = "Required Type";
  }
  if (validator.isEmpty(data.Title)) {
    errors.Title = "Required Title";
  }
  if (validator.isEmpty(data.Description)) {
    errors.Description = "Required Description";
  }
  if (validator.isEmpty(data.Skill)) {
    errors.Skill = "Required Skill";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};