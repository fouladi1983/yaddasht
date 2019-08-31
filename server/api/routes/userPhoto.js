const express = require("express");
const router = express.Router();
const sql = require("mssql");
const config = require("./db/config");

router.get("", (req, res, next) => {
  const userId = req.query.userId;
  sql.close();
  sql.connect(config, err => {
    if (err) {
      res.status(503).json({
        error: "خطایی در برقراری ارتباط با سرور رخ داده است"
      });
    } else {
      const request = new sql.Request();
      request.query(
        `select photo from user_photo where userId  = ${userId}`,
        (err, result) => {
          if (err) {
            res
              .status(503)
              .json({ error: "خطایی در واکشی اطلاعات کاربر به وجود آمده است" });
            sql.close();
          } else {
            if (result.recordset.length > 0) {
              res.status(200).json({ photo: result.recordset[0].photo });
              console.log(result.recordset[0].photo);
              sql.close();
            } else {
              res.status(204).json({ photo: '' });
              sql.close();
            }
          }
        }
      );
    }
  });
});

router.post("/upload", (req, res, next) => {
  let photoUserInfo = {
    photo: req.body.photo,
    userId: req.body.userId
  };
  sql.close();
  sql.connect(config, err => {
    if (err) {
      res
        .status(503)
        .json({ message: "خطایی در برقراری ارتباط با سرور رخ داده است" });
    }
    const request = new sql.Request();
    if (photoUserInfo.photo === "") {
      res.status(204).json({
        message: "محتوای فایل ارسال نگردید است"
      });
    } else {
      request.query(`select userId from user_photo where userId = ${photoUserInfo.userId}`, (err, result) => {
        if(result.recordset.length > 0){
          request.query(`update user_photo
                          set photo = ${photoUserInfo.photo}
                          where userId = ${photoUserInfo.userId}`);
        }else{
          request.query(
            `insert into user_photo(photo,userId)
                          values('${photoUserInfo.photo}', '${photoUserInfo.userId}')`,
            err => {
              if (err) {
                res.status(503).json({
                  message: "خطایی در ذخیره عکس در دیتابیس رخ داده است"
                });
                sql.close();
              } else {
                res
                  .status(201)
                  .json({ message: "عکس کاربر با موفقیت ذخیره گردید" });
                sql.close();
              }
            }
          );
        }
      });
    }
  });
});

module.exports = router;
