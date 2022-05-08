const express = require("express");
const router = express.Router();

const {create, allcategories, deletecategory, updatecategory, singlecategory} = require("../controllers/category.controller");


//ROUTES    /API/V1/CATEGORY/CREATE  (EX:)
router.post("/category/create", create);
router.get("/category/all", allcategories);
router.delete("/category/delete/:id",deletecategory);
router.put("/category/update/:id",updatecategory);
router.get("/category/show/:id",  singlecategory);




module.exports = router;