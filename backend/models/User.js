const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minLength: 3,
	},
	lastName: {
		type: String,
		required: true,
		minLength: 3,
	},
	gender: {
		type: String,
		// required: true,
		enum: [
			"female",
			"male",
		]
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: { type: String, required: true, minLength: 6 },
	profileImg: { type: String },
	bio: { type: String },
	address: { type: String },
	skill: {
		type: [String],
		// required: true,
		enum: [
			"React",
			"Flutter",
			"Node.js",
			"Python",
			"Swift",
			"java",
			"Android",
			"Go",
			"Vue.js",
		],
	},
	skillLevel: {
		type: String,
		// required: true,
		enum: ["beginner", "intermediate", "professional"],
	},
	category: {
		type: String,
		enum: [
			"React Developer",
			"Flutter Developer",
			"Android Developer",
			"Full-stack Developer",
			"IOS App Developer",
		],
		// required: true,
	},

	CreateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", UserSchema);
