const express = require('express');
const router = express.Router();
const mssql = require('mssql');
const config = require('./db/config');

router.get('/', (req,res,next) => {
  res.status(200).json({
    message: `GET doesn't supported here`
  });
})

router.post('/', (req,res,next) => {
  userInfo = {
    photo = req.body.photo,
    userId = req.body.userId
  }
});

module.exports = router;
