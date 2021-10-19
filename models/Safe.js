const mongoose = require("mongoose");
 
const SafeScheme = mongoose.Schema({
  safename: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: String,
    required: true,
  },
  selectType: {
    type: String,
    // required: true,
  },

  description: {
    type: String,
    required: true,
  },
 secrets: {
    type: Array,
    // unique: true,
},
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Safe", SafeScheme);
