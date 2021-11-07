const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
   
    postBy:{
        type: String,
        required: true,
    },
    companyName: {
        type: String,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    jobRequirements: {
        type:[String],
        required: true,
    },
    description: {
		type: String,
		required: true,
	},
    jobType:{
		type: String,
        required: true,
        enum: ["full-time","part-time","contract"],
    },
    salary: {
        type: String,
        required: true,
    },
    jobEndDate: {
        type: Date,
        required: true,
    },
    category: {
		type: String,
        enum: [
            "Web Developer",
			"React Developer",
			"Flutter Developer",
			"Android Developer",
			"Full-stack Developer",
			"IOS App Developer",
		],
		required: true,
	},
    CreateAt: { type: Date, default: Date.now },

    

});
module.exports = mongoose.model("Job", jobSchema);
