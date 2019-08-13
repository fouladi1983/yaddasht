const express = require('express')
const router = express.Router();
const sql = require('mssql');
const bcrypt = require('bcrypt');
const config = require('./db/config');
const uuidv1 = require('uuid/v1');
const functions = require('./functions');

uuid = uuidv1();

router.get('/', (req,res)=>{
  res.status(200).json({
    message: 'GET method has not supported for this page, use POST to create your user'
  })
})

router.post('/', (req,res,next)=>{
  let userInfo = {
    email: req.body.email,
    password: req.body.password,
    position: req.body.position
  }

  const saltRound = 10;

  sql.close();
  sql.connect(config, (err)=>{
    if(err) res.status(503).json({ message: 'خطایی در اتصال به دیتابیس رخ داده است لطفا دوباره تلاش نمایید'});

    let request = new sql.Request();
    bcrypt.hash(userInfo.password, saltRound, (err,hash)=>{
      if(err){
        console.log(err)
        res.status(503).json({message: 'خطایی در کد کردن رمز عبور پیش آمده لطفا دوباره تلاش نمایید'});
      }
      request.query("insert into users(email,password,position)\
                      values(N'"+userInfo.email+"', N'"+hash+"', N'"+position+"')", (err)=>{
                        if(err) res.status(503).json({message: 'خطایی در ثبت اطلاعات کاربر رخ داده است لطفا دوباره تلاش نمایید'});

                        request.query("select Id from users where email = '"+userInfo.email+"'",(err,result)=>{
                          let userId = result.recordset[0].Id;

                          request.query("insert into uuid(userId, uuId) values(N'"+userId+"', N'"+uuid+"')", (err)=>{
                            if(err) console.log(err);

                            let to = userInfo.email;
                            let subject = 'فعال سازی';
                            let html = '<p>برای فعال سازی نام کاربری بر روی لینک زیر کلیک کنید</p><p>http://api.parmok.com/useractivation?uuid='+uuid+'</p>';

                            functions.mailer(to,subject,html);

                            res.status(200).json({
                              message: 'اطلاعات حساب کاربری شما با موفقیت ثبت گردید. همچنین ایمیلی برای فعال سازی حساب کاربری شما به ایمیلی که معرفی کرده اید ارسال گردید'
                            });

                            sql.close();
                          })
                        })
                      })
    })
  })
})

module.exports = router;
