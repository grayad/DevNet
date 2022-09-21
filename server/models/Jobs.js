const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobtitle: {
    type: String,
    required: true,
  },
  jobdescription: {
    type: String,
    required: true,
  },
  companyname:{
    type: String,
    required:true,
  },
  skills: []
});
module.exports = mongoose.model('jobFeed', jobSchema);
