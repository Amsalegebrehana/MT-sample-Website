const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	profileImg: {
		type: String,
	},
	bio: {
		type: String,
	},
	address: {
		type: String,
	},
	password: { type: String, required: true },
	skill: {
		type: [String],
	},
	CreateAt: { type: Date, default: Date.now },

});
module.exports = mongoose.model('User', UserSchema);