const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('./db/config');

router.get('', (req,res,next) => {
  const userId = req.query.userId;
  res.status(200).json({
    message: `GET doesn't supported here`
  });
  console.log(userId);
})

router.post('/upload', (req,res,next) =>{
  let photoUserInfo = {
    photo: req.body.photo,
    userId: req.body.userId
  };
  sql.close();
  sql.connect(config, (err) => {
    if(err){
      res.status(503).json({ message: 'خطایی در برقراری ارتباط با سرور رخ داده است'});
    }
    const request = new sql.Request();
    if(photoUserInfo.photo === ''){
      res.status(204).json({
        message: 'محتوای فایل ارسال نگردید است'
      });
    }else{
      request.query(`insert into user_photo(photo,userId)
                      values('${photoUserInfo.photo}', '${photoUserInfo.userId}')`, (err) => {
                        if(err){
                          res.status(503).json({
                            message: 'خطایی در ذخیره عکس در دیتابیس رخ داده است'
                          });
                          sql.close();
                        }else{
                          res.status(201).json({message: 'عکس کاربر با موفقیت ذخیره گردید'});
                          sql.close();
                        }
                      })
    }
  })
});

module.exports = router;
