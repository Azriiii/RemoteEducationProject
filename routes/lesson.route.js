const express = require('express');
const { AddLesson, FindAllLessons, FindSinglLesson, UpdateLesson, DeleteLesson } = require('../controllers/lesson.controller');
const router = express.Router()


/* add lesson */
router.post('/lesson', AddLesson)

/* find all lessons */
router.get('/lesson', FindAllLessons)

/* find single lesson */
router.get('/lesson/:id', FindSinglLesson)

/* add lesson */
router.put('/lesson/:id', UpdateLesson)

/* add lesson */
router.delete('/lesson/:id', DeleteLesson)

module.exports = router;