var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var connection=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  port:3307
})

/* GET home page.*/
router.post('/', function(req, res, next) {
  var a=req.body.a
  res.header('Access-Control-Allow-Origin','*')
  connection.query('SELECT * FROM a.ss WHERE  name LIKE "%'+a+'%" OR details LIKE "%'+a+'%"',function (err, rows, fileds) {
    res.send(rows)
  })
});

module.exports = router;