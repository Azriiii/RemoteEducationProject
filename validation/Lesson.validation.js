const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateLesson(data) {
    let errors = {};
    // data.idCour = !isEmpty(data.idCour) ? data.idCour : "";
    data.titre = !isEmpty(data.titre) ? data.titre : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.dateCreation = !isEmpty(data.dateCreation) ? data.dateCreation : "";



    // if (validator.isEmpty(data.idCour)) {
    //     errors.idCour = "Required Course ID";
    // }
    if (validator.isEmpty(data.titre)) {
        errors.titre = "Required titre";
    }
    if (validator.isEmpty(data.desc)) {
        errors.desc = "Required description";
    }
    if (validator.isEmpty(data.dateCreation)) {
        errors.user = "Required Date";
    }



    return {
        errors,
        isValid: isEmpty(errors)
    }
};