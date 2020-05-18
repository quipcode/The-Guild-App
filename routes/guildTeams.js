var express = require('express');
var router = express.Router();

const GuildTeams = require('../models/guildTeams')


router.get("/",(req,res) =>{
  GuildTeams.find()
  .then(user => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(user);
  })
  .catch(err => next(err))
})

module.exports = router;
