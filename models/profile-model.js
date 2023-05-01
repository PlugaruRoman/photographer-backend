const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, unique: true, required: true },
  phone: { type: String },
  city: { type: String },
  company: { type: String },
  price: { type: Number },
  about: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  web: { type: String },
  user: { type: String, unique: true, required: true },
});

module.exports = model("Profile", profileSchema);
