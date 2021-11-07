const Joi = require("joi");

function validatePostJob(data) {
	const schema = Joi.object({                    
		postBy: Joi.string().required(),
		companyName:Joi.string(),
		jobTitle: Joi.string().required(),
		salary: Joi.string().required(),
		jobEndDate: Joi.date().required(),
		jobRequirements: Joi.string().required(),
		description: Joi.string().required(),
		jobType: Joi.string().required(),
		category: Joi.string().required(),
	});

	return schema.validate(data);
}

module.exports.validatePostJob = validatePostJob;
