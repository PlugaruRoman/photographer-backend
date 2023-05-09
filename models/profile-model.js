const { Schema, model, default: mongoose } = require("mongoose");

const profileSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, required: true },
    phone: { type: String },
    city: { type: String },
    company: { type: String },
    price: { type: Number },
    hour: { type: Number },
    about: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    web: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
    twitter: { type: String },
    viewsCount: { type: Number, default: 0 },
    avatar: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Profile", profileSchema);
