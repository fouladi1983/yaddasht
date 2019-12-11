const express = require('express');
const router = express.Router();
const config = require('./db/config');
const sql = require('mssql');

router.get('/', (req,res) => {
  const userId = req.query.userId;
  sql.close();
  sql.connect(config, (err) => {
    if(err) res.status(503).json({ message: 'خطایی در اتصال به دیتابیس رخ داده است لطفا دوباره تلاش نمایید'});

    const request = new sql.Request();
  });
})

module.exports = router;
