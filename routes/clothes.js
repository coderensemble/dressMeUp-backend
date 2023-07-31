var express = require('express');
var router = express.Router();

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
