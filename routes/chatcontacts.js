var express = require('express');
var router = express.Router();

const ChatContacts = require('../models/chatcontacts')



router.get("/",(req,res) =>{
  ChatContacts.find()
  .then(chats => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(chats);
  })
  .catch(err => next(err))
})

module.exports = router;
