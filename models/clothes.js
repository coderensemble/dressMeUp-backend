const mongoose = require('mongoose');

const clotheSchema = mongoose.Schema({
  name: String,
  maintype: String,
  color: {},
  image: String,
  subtype: String,
  brand: String,
  event: {
    party: Boolean,
    sport: Boolean,
    casual: Boolean,
    work: Boolean
  },
  material: String,
  cut: String,
  season: {
    spring: Boolean,
    summer: Boolean,
    fall: Boolean,
    winter: Boolean
  },
  waterproof: Boolean
});

const Clothe = mongoose.model('clothes', clotheSchema);

module.exports = Clothe;