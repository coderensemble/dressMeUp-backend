var express = require("express");
var router = express.Router();
const uniqid = require("uniqid");

const Outfits = require('../models/outfits');


const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// Pour ajout de la photo prise à l'écran OverviewOutfit
// POST avec push en DB + ajout au store
router.post("/upload", async (req, res) => {
  const photoPath = `./tmp/${uniqid()}.jpg`;
  const resultMove = await req.files.photoFromFront.mv(photoPath);

  if (!resultMove) {
    const resultCloudinary = await cloudinary.uploader.upload(photoPath);

    res.json({ result: true, url: resultCloudinary.secure_url });
  } else {
    res.json({ result: false, error: resultMove });
  }
  fs.unlinkSync(photoPath);
});

// Pour la page de finalisation de création de la tenue
// POST avec push en DB + ajout au store
router.post("/", (req, res) => {
  const {top1, top2, bottom, shoes, accessory1, accessory2, accessory3, image, event, id, isFavorite, username} = req.body
  
  Outfits.findOne({ id: id })
  .then(data => {
      if (data === null) {
          const newOutfit = new Outfits({
            top1: top1,
            top2: top2,
            bottom: bottom,
            shoes: shoes,
            accessory1: accessory1,
            accessory2: accessory2,
            accessory3: accessory3,
            image: image,
            event: event,
            id: id,
            isFavorite: false,
            username: username
          })
          newOutfit.save().then(data => {
              // console.log(data)
              res.json({ result: true, outfit: data })
          })
      }
  })

})

// Pour la mise à jour de l'état favori de la tenue
// PUT avec push en DB + ajout au store
router.put("/", (req, res) => {
  const outfitId = req.body.outfitId

  Outfits.findOne({id: outfitId})
  .then(data => {
    if (data) {
      data.isFavorite = !data.isFavorite
      data.save().then(updatedOutfit => {
        res.json({ result: true, isFavorite: data.isFavorite })
        })
    } else{
      res.json({result: false, error: 'Something went wrong'})
    }
})
});

// Pour la page de suppression du vêtement
// DELETE avec push en DB + suppression dans le store
// + DELETE de toutes les tenues associées avec push en DB + suppression dans le store
router.delete("/", (req, res) => {});

module.exports = router;