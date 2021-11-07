const express = require('express');
const {postJob,getJobByID,deleteJob,getJob,updateJob} = require('../controllers/jobController');
const router = express.Router();

router.post('/post',postJob);

router.get('/',getJob);

router.get('/:postBy',getJobByID);

router.put('/:jobID', updateJob);

router.delete('/:jobID', deleteJob);

module.exports = router;