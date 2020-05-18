var express = require('express');
var router = express.Router();

const Myguilds = require('../models/myguilds')

router.get("/",(req,res) =>{
  Myguilds.find()
  .then(user => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(user);
  })
  .catch(err => next(err))
})

module.exports = router;
