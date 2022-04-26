const express = require('express');
const { AddApply, FindAllApplys, FindSinglApply, UpdateApply, DeleteApply } = require('../controllers/applys.controller');
const router = express.Router()


/* add application */
router.post('/applys', AddApply)

/* find all applications */
router.get('/applys', FindAllApplys)

/* find single application */
router.get('/applys/:id', FindSinglApply)

/* add application */
router.put('/applys/:id', UpdateApply)

/* add application */
router.delete('/applys/:id', DeleteApply)

module.exports = router;