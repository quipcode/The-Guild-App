var express = require('express');
var router = express.Router();

const Icons = require('../models/icons')


router.get("/",(req,res) =>{
  Icons.find()
  .then(user => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(user);
  })
  .catch(err => next(err))
})

module.exports = router;
