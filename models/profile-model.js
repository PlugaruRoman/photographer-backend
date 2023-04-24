const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  phone: { type: String },
  city: { type: String },
  company: { type: String },
  price: { type: Number },
  about: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  web: { type: String },
});

module.exports = model("Profile", profileSchema);
