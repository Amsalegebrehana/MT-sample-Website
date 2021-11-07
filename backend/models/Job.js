const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
   
    postBy:{
        type: String,
        required: true,
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
    category: {
        type: String,
        required: true,
    },
    CreateAt: { type: Date, default: Date.now },

    

});
module.exports = mongoose.model("Job", jobSchema);
