const express = require('express');
const { AddCour, FindAllCours, FindSinglCour, UpdateCour, DeleteCour } = require('../controllers/cour.controller');
const router = express.Router()


/* add Cour */
router.post('/cour', AddCour)

/* find all Cours */
router.get('/cour', FindAllCours)

/* find single Cour */
router.get('/cour/:id', FindSinglCour)

/* add Cour */
router.put('/cour/:id', UpdateCour)

/* add Cour */
router.delete('/cour/:id', DeleteCour)

module.exports = router;