const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  jobtitle: {
    type: String,
    required: true,
  },
  jobdescription: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  skills: [],
});

const Job = model("Job", jobSchema);

module.exports = Job;
