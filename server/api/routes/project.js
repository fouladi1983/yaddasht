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
    request.query(`select [pi].[name], [pi].startDate, [pi].endDate from projects p join projectInfo [pi]
                    on p.projectInfoId = [pi].id
                    where p.userId = ${userId}`, (err,result) => {
                      if(err) res.status(503).json({ message: 'خطایی در اتصال به دیتابیس رخ داده است لطفا دوباره تلاش نمایید'});

                      res.status(200).json({
                        result: result.recordset
                      })
                    });
  });
})

module.exports = router;
