const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  skills: [],
});

const Job = model("Job", jobSchema);

module.exports = Job;
