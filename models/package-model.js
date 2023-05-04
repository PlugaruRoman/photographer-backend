const { Schema, model } = require("mongoose");

const packageSchema = new Schema({
  value: { type: Array },
  user: { type: String, unique: true, required: true },
});

module.exports = model("Package", packageSchema);
