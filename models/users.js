const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
  clothes: [{ type: mongoose.Schema.Types.ObjectId, ref: "clothes" }],
  outfits: [{ type: mongoose.Schema.Types.ObjectId, ref: "outfits" }],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
