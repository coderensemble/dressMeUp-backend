var express = require('express');
var router = express.Router();
const uniqid = require('uniqid');

const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Pour ajout de la photo prise à l'écran CreatheClotheE
// POST avec push en DB + ajout au store
router.post('/upload', async (req, res)=> {
    const photoPath = `./tmp/${uniqid()}.jpg`;
    const resultMove = await req.files.photoFromFront.mv(photoPath);
   
    if(!resultMove) {
      
        const resultCloudinary = await cloudinary.uploader.upload(photoPath);

       
        res.json({ result: true, url: resultCloudinary.secure_url });    }
        else {
      res.json({ result: false, error: resultMove });
    }
    fs.unlinkSync(photoPath);

})

// Pour la page de finalisation de création du vêtement
// POST avec push en DB + ajout au store
router.post('/', (req, res)=>
{

})


// Pour la modification du vêtement existant
// PUT avec push en DB + ajout au store
router.put('/', (req, res)=>
{

})

// Pour la page de suppression du vêtement
// DELETE avec push en DB + suppression dans le store
// + DELETE de toutes les tenues associées avec push en DB + suppression dans le store
router.delete('/', (req, res)=>
{

})


module.exports = router;
