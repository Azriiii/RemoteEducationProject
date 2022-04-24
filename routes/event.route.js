const express = require('express');
const {   AddEvent,
    FindAllEvents,
    FindSinglEvent,
    UpdateEvent,
    DeleteEvent, } = require('../controllers/event.controller');
const router = express.Router()


/* add job */
router.post('/event', AddEvent)

/* find all jobs */
router.get('/event', FindAllEvents)

/* find single job */
router.get('/event/:id', FindSinglEvent)

/* add job */
router.put('/event/:id', UpdateEvent)

/* add job */
router.delete('/event/:id', DeleteEvent)

module.exports = router;