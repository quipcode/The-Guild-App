var express = require('express');
var router = express.Router();

const LoggedInUser = require('../models/loggedInUser')

router.get("/",(req,res) =>{
  LoggedInUser.find()
  .then(user => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(user);
  })
  .catch(err => next(err))
})

module.exports = router;
