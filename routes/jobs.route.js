const express = require('express');
const { AddJob, FindAllJobs, FindSinglJob, UpdateJob, DeleteJob } = require('../controllers/jobs.controller');
const router = express.Router()


/* add job */
router.post('/jobs', AddJob)

/* find all jobs */
router.get('/jobs', FindAllJobs)

/* find single job */
router.get('/jobs/:id', FindSinglJob)

/* add job */
router.put('/jobs/:id', UpdateJob)

/* add job */
router.delete('/jobs/:id', DeleteJob)

module.exports = router;