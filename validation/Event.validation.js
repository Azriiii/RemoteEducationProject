const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateEvent(data) {
  let errors = {};
 
  data.title = !isEmpty(data.title) ? data.title : "";
  data.start = !isEmpty(data.start) ? data.start : "";
  data.end = !isEmpty(data.end) ? data.end : "";
 
  if (validator.isEmpty(data.title)) {
    errors.title = "Required Title";
  }
  if (validator.isEmpty(data.start)) {
    errors.start = "Required start";
  }
  if (validator.isEmpty(data.end)) {
    errors.end = "Required end";
  }
  

  return {
      errors,
      isValid: isEmpty(errors)
  }
};