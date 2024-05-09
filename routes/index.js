var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  var [rows] = await connection.query("select * from board")
  res.render('index', { boards: rows });
});

router.get("/write", function (req, res) {
  res.render("write")
})

module.exports = router;
