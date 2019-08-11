const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('./db/config');

router.get('/', (req,res,next) => {
  let email = req.query.email;

  sql.close();
  sql.connect(config, (err) => {
    if(err) res.status(503).json({
      message: 'خطایی در برقراری ارتباط با سرور پیش آمده است'
    });

    let request = new sql.Request();
    request.query("select Id from users where email = N'"+email+"'", (err,result) => {
      if(err) console.log(err);

      if(result.recordset.length > 0){
        res.status(200).json({message: true});
        sql.close();
      }else{
        res.status(401).json({message: false});
        sql.close();
      }
    })
  })
})

module.exports = router;
