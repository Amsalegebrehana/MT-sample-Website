const Joi = require("joi");

function validateUserAccount(data) {
	const schema = Joi.object({
		firstName: Joi.string().min(3).required(),
		lastName: Joi.string().min(3).required(),
		gender: Joi.string().required(),
		email: Joi.string().required().email(),
		password: Joi.string()
			.min(6)
			.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
			.required(),
		profileImg: Joi.string(),
		bio: Joi.string(),
		address: Joi.string(),
		skill: Joi.array(),
		skillLevel: Joi.string(),
		category: Joi.string(),
	});

	return schema.validate(data);
}

function validateLoginUser(data) {
	const schema = Joi.object({
		email: Joi.string().required().email(),
		password: Joi.string()
			.min(6)
			.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
			.required(),
	});

	return schema.validate(data);
}

module.exports.validateUserAccount = validateUserAccount;
module.exports.validateLoginUser = validateLoginUser;
