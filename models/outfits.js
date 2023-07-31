const mongoose = require("mongoose");

const outfitSchema = mongoose.Schema({
  top: [{type: mongoose.Schema.Types.ObjectId, ref:'clothes'}],
  pant: [{type: mongoose.Schema.Types.ObjectId, ref:'clothes'}],
  shoes: [{type: mongoose.Schema.Types.ObjectId, ref:'clothes'}],
  accessory1: [{type: mongoose.Schema.Types.ObjectId, ref:'clothes'}],
  accessory2: [{type: mongoose.Schema.Types.ObjectId, ref:'clothes'}],
  accessory3: [{type: mongoose.Schema.Types.ObjectId, ref:'clothes'}],
  isFavorite: Boolean,
  image: String 
});

const Outfit = mongoose.model("outfits", outfitSchema);

module.exports = Outfit;
