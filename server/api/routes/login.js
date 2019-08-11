const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('./db/config');
const bcrypt = require('bcrypt');

router.get('/',(req,res,next)=>{
  res.send('GET method has not supported for this page, use POST to create your user');
})

router.post('/', (req,res,next) => {
  let userInfo = {
    email: req.body.email,
    password: req.body.password
  }

  sql.close();
  sql.connect(config, (err) => {
    if(err) res.status(503).json({message: 'خطایی در برقراری ارتباط با سرور رخ داده است'});

    let request = new sql.Request();
    request.query("select isActive,password from users", (err, result) => {
      if(err) console.log(err);

      let isActive = result.recordset[0].isActive;
      let password = result.recordset[0].password;

      if(isActive === false){
        res.status(200).json({mesasge: 'این حساب کاربری غیرفعال است'});
        sql.close();
      }else{
        bcrypt.compare(userInfo.password, password, (err, result) => {
          if(err) console.log(err);

          if(result == false){
            res.status(401).json({message: 'رمز وارد شده اشتباه است'});
            sql.close();
          }else{
            res.status(201).json({message: 'OK'});
            sql.close();
          }
        })
      }
    })
  })
})


module.exports = router;
