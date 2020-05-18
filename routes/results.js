var express = require('express');
var router = express.Router();

const Results = require('../models/results')


router.get("/",(req,res) =>{
    Results.find()
  .then(user => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(user);
  })
  .catch(err => next(err))
})

module.exports = router;
