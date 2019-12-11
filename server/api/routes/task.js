const express = require("express");
const router = express.Router();
const config = require("./db/config");
const sql = require("mssql");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "GET method has not supported for this page, use POST to create your user"
  });
});

router.post("/createTask", (req, res) => {
  let taskInfo = {
    name: req.body.taskName,
    description: req.body.taskDescription,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    direct: req.body.direct,
    userId: req.body.userId,
    projectId: req.body.projectId
  };

  let task = {
    taskInfoId: Number,
    userId: Number,
    direct: Boolean
  };

  let projectId = taskInfo.projectId;

  sql.close();
  sql.connect(config, err => {
    if (err)
      res.status(503).json({
        message: "خطایی در اتصال به دیتابیس رخ داده است لطفا دوباره تلاش نمایید"
      });
    let request = new sql.Request();
    request.query(
      `insert into taskInfo(name,description,startDate,endDate)
                    values('${taskInfo.name}','${taskInfo.description}','${taskInfo.startDate}','${taskInfo.endDate}')`,
      (err, result) => {
        if (err) {
          res.status(503).json({
            message:
              "خطایی در ثبت اطلاعات کاربر رخ داده است لطفا دوباره تلاش نمایید"
          });
          sql.close();
        } else {
          request.query(
            `select id as lastID from taskInfo where id = @@Identity`,
            (err, result) => {
              if (err) {
                res.status(503).json({
                  message:
                    "خطایی در ثبت اطلاعات کاربر رخ داده است لطفا دوباره تلاش نمایید"
                });
                sql.close();
                //OK
              } else {
                task.taskInfoId = result.recordset[0].lastID;
                if (taskInfo.direct === true) {
                  task.direct = 1;
                } else {
                  task.direct = 0;
                }
                task.userId = taskInfo.userId;

                request.query(
                  `insert into tasks(taskInfoId,userId,direct)
                                            values('${task.taskInfoId}','${task.direct}','${task.userId}')`,
                  (err, result) => {
                    console.log(task.direct, task.taskInfoId, task.userId);
                    if (err) {
                      res.status(503).json({
                        message:
                          "خطایی در ثبت اطلاعات کاربر رخ داده است لطفا دوباره تلاش نمایید"
                      });
                      sql.close();
                    } else {
                      request.query(
                        `select id from tasks where id = @@Identity`,
                        (err, result) => {
                          let taskId = result.recordset[0].id;
                          request.query(
                            `insert into projectTasks(taskId,projectId)
                                             values('${taskId}','${projectId}')`,
                            (err, result) => {
                              if (err) {
                                res.status(503).json({
                                  message:
                                    "خطایی در ثبت اطلاعات کاربر رخ داده است لطفا دوباره تلاش نمایید"
                                });
                                sql.close();
                              } else {
                                res.status(200).json({
                                  message: `با موفقیت ثبت گردید ${taskInfo.name}`
                                });
                              }
                            }
                          );
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  });
});

module.exports = router;
