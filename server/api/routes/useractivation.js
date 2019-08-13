const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('./db/config');

router.get('/', (req,res,next) => {
  let userUuid = req.query.uuid;

  if(userGuid != null){
    sql.close();
    sql.connect(config,(err)=>{
      if(err) console.log(err);

    }
  }else{
        res.status(201).json({
            message: 'بدنه درخواست شما حاوی کد لازم برای فعال سازی کاربر نیست'
      });
  }
})


module.exports = router;
