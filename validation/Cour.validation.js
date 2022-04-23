const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateCour(data) {
  let errors = {};
  data.titre = !isEmpty(data.titre) ? data.titre : "";
  data.desc = !isEmpty(data.desc) ? data.desc : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.user = !isEmpty(data.user) ? data.user : "";

  data.modalite = !isEmpty(data.modalite) ? data.modalite
   : "";
  data.published_date = !isEmpty(data.published_date) ? data.published_date : "";

 
  
  if (validator.isEmpty(data.titre)) {
    errors.titre = "Required titre";
  }
  if (validator.isEmpty(data.desc)) {
    errors.desc = "Required description";
  }
  if (validator.isEmpty(data.user)) {
    errors.user = "Required user";
  }
  
  if (validator.isEmpty(data.category)) {
    errors.category = "Required category";
  }
  
  
  if (validator.isEmpty(data.published_date)) {
    errors.published_date = "Required date";
  }
  if (validator.isEmpty(data.modalite)) {
    errors.modalite = "Required modalite";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};
