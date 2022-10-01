const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  mobile: { type: String },
  class: { type: String },
});

module.exports = mongoose.model("users", Users);
