const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
	businessName: {
		type: String,
		required: true,
		minLength:3,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: { type: String, required: true, minLength: 6 },
	description: { type: String },
    address: [String],
    category: {
		type: String,
		required: true,
    },
    logo: { type: String},
	CreateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Company", CompanySchema);
