var express = require('express');
var router = express.Router();

const Guilds = require('../models/guilds')


router.get("/",(req,res) =>{
  Guilds.find()
  .then(user => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(user);
  })
  .catch(err => next(err))
})

module.exports = router;
