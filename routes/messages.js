var express = require('express');
var router = express.Router();

const Messages = require('../models/messages')

router.get("/",(req,res) =>{
  Messages.find()
  .then(user => {
      res.statusCode = 200,
      res.setHeader('Content-Type', 'application/json')
      res.json(user);
  })
  .catch(err => next(err))
})

router.route("/:messengerid")
.get((req,res,next) => {
  Messages.findOne({'id': req.params.messengerid})
    .then(messengeContent => {
      if(messengeContent){
        res.statusCode = 200,
        res.setHeader('Content-Type', 'application/json')
        res.json(messengeContent);
      }else{
        const err = new Error(`Messages ${req.params.messengerid} not found`)
        err.status = 404;
        return next(err);
      }
       
    })
    .catch(err => next(err))
})


module.exports = router;
