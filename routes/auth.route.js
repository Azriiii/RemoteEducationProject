const express =require('express')
const router = express.Router()


//validation
const{
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')

//Load controllers
const {
    registerController,
    activationController,
    loginController,
    forgotPasswordController,
    resetPasswordController,
    googleController
}= require('../controllers/auth.controller.js')


router.post('/register',validRegister,registerController);
router.post('/login',validLogin,loginController);
router.post('/activation',activationController);
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
router.put('/resetpassword', resetPasswordValidator, resetPasswordController);
router.post('/googlelogin',googleController);


module.exports=router;