var express = require('express');
var router = express.Router();

const { checkBody } = require("../modules/checkBody");
const User = require("../models/users");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");

// Pour la page login / signup, création du compte
router.post('/signup', (req, res)=>
{
    if (!checkBody(req.body, ["username", "password"])) {
        res.json({ result: false, error: "Missing or empty fields" });
        return;
      }
    
      User.findOne({ username: req.body.username }).then((data) => {
        if (data === null) {
          const hash = bcrypt.hashSync(req.body.password, 10);
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            token: uid2(32),
          });
    
          newUser.save().then((newDoc) => {
            res.json({ result: true, token: newDoc.token });
          });
        } else {
          // User already exists in database
          res.json({ result: false, error: "User already exists" });
        }
      });
})

// Pour la page login / signin, connexion au compte
router.post('/signin', (req, res)=>
{
    if (!checkBody(req.body, ["username", "password"])) {
        res.json({ result: false, error: "Missing or empty fields" });
        return;
      }
    
      User.findOne({ username: req.body.username }).then((data) => {
        if (data && bcrypt.compareSync(req.body.password, data.password)) {
          res.json({ result: true, token: data.token });
        } else {
          res.json({ result: false, error: "User not found or wrong password" });
        }
      });
})

// Pour la page Home / récupération de l'ensemble des vêtements et tenues pour push en store
router.get('/home', (req, res)=>
{

})

// Pour la page UserProfile / modification du compte
router.put('/', (req, res)=>
{

})

// Pour la page UserProfile / suppression du compte
router.delete('/', (req, res)=>
{

})


module.exports = router;
