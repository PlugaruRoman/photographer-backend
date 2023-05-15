const { Schema, model } = require("mongoose");

const countrySchema = new Schema({
  value: { type: String, unique: true, required: true },
  label: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = model("Country", countrySchema);
