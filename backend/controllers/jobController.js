const _ = require("lodash");
const Job = require("../models/Job");
const {validatePostJob } = require("../validation/jobValidation");

// post job 
async function postJob(req, res) {
	const { error } = validatePostJob(req.body);
	if (error) return res.status(400).send(error.details[0].message);
    const job = new Job(
        _.pick(req.body, [
            "postBy",
            "jobTitle",
            "jobRequirements",
            "description",
            "jobType",
            "category",
        ])
    );
    try {
		await job.save();

		res.status(200).json({ post: job._id });
		// res.status(200).send({ user: user._id });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
}
// get posted job 
async function getJob(req, res) {
	try {
		const job = await Job.find();

        res.status(200).send(job);
	} catch (error) {
		res.json({ message: error.message });
	}
}

async function getJobByID(req, res) {
	try {
        const job = await Job.find({postBy:req.params.postBy}).exec()
        res.status(200).send(job);
	} catch (error) {
		res.json({ error: error.message });
	}
}
// update job 
async function updateJob(req, res) {

	try {
		const job = await Job.updateOne(
			{ _id: req.params.jobID },
			{
				$set: _.pick(req.body, [
                    "jobTitle",
                    "jobRequirements",
                    "description",
                    "jobType",
                    "category",
                ]),
			}
		);

		res.status(200).json(job);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
}
// delete job 
async function deleteJob(req, res) {
	try {
		const job = await Job.remove({ _id: req.params.jobID });
		res.status(200).json(job);
	} catch (error) {
		res.json({ error: error.message });
	}

}


module.exports.postJob = postJob;
module.exports.getJob = getJob;
module.exports.getJobByID = getJobByID;
module.exports.updateJob = updateJob;
module.exports.deleteJob = deleteJob;
