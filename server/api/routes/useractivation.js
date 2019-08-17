const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('./db/config');

router.get('/', (req,res,next) => {
  let userUuid = req.query.uuid;

  if(userUuid != null){
    sql.close();
    sql.connect(config,(err)=>{
      if(err) console.log(err);

      let request = new sql.Request();

      request.query("select userId from uuid where uuId = N'"+userUuid+"'", (err, result) => {
        if(result.recordset.length < 1) {
          res.status(406).json({
            message: "کاربری با درخواست ارسالی یافت نشد"
          });
          sql.close();
        }else{
          if(err){
            res.status(503).json({
              message: "درخواست شما با خطا مواجه شده است لطفا با ادمین تماس حاصل نمایید"
            });
          }else{
            let userId = result.recordset[0].userId;
            request.query("select isActive from users where Id = '"+userId+"'", (err,result)=>{
              var isActive = result.recordset[0].isActive;
              console.log(isActive);
              if(isActive == false){
                  request.query("update users set isActive = 1 where Id = '"+userId+"'",(err)=>{
                      if(err) console.log(err);

                      request.query("delete from uuid where userId = '"+userId+"'");

                      res.status(201).json({
                          message: 'حساب کاربری شما فعال گردید'
                      })
                      setTimeout(()=>{
                          sql.close();
                      },0.01);
                  });
              }else{
                  res.status(409).json({
                    message: 'این حساب کاربری قبلا فعال گردیده است'
                  });
                  sql.close();
              }
            });
          }
        }
      });
    });
  }else{
        res.status(201).json({
            message: 'بدنه درخواست شما حاوی کد لازم برای فعال سازی کاربر نیست'
      });
  }
})


module.exports = router;
