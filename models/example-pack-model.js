const { Schema, model } = require("mongoose");

const examplePackSchema = new Schema({
  value: { type: String },
});

module.exports = model("Example-pack", examplePackSchema);
