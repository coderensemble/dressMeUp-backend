const mongoose = require('mongoose');

const clotheSchema = mongoose.Schema({
  name: String,
  color: String,
  image: Image,
  subtype: String,
  brand: String,
  event: {
    party: boolean,
    sport: boolean,
    casual: boolean,
    work: boolean
  },
  material: String,
  cut: String,
  saison: {
    spring: boolean,
    summer: boolean,
    fall: boolean,
    winter: boolean
  },
  waterproof: Boolean
});

const Clothe = mongoose.model('clothes', clotheSchema);

module.exports = Clothe;