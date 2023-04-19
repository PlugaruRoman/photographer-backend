const { Schema, model } = require("mongoose");

const citySchema = new Schema({
  value: { type: String, unique: true, required: true },
  label: { type: String, required: true },
});

module.exports = model("City", citySchema);
