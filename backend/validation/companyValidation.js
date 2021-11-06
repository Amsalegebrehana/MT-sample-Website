const Joi = require("joi");

function validateCompanyAccount(data) {
	const schema = Joi.object({
		businessName:Joi.string().min(3).required(),
		email: Joi.string().required().email(),
        password: Joi.string()
      .min(6)
			.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
			.required(),
		logo: Joi.string(),
		description: Joi.string(),
		address: Joi.string(),
		category: Joi.string(),
	});

	return schema.validate(data);
}

function validateLoginCompany(data) {
	const schema = Joi.object({
		email: Joi.string().required().email(),
		password: Joi.string()
		.min(6)
			  .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
			.required(),
	
	});

	return schema.validate(data);
}

module.exports.validateCompanyAccount = validateCompanyAccount;
module.exports.validateLoginCompany = validateLoginCompany;
