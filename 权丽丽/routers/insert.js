var express = require("express");
var app = express();
var router = express.Router();
connection = require("../config/mysql.js");
router.post("/insert", function(req, res) {
    var id = req.body.id;
    var text = req.body.text;
    console.log(text);
    console.log(req.body.id)
    connection.query(`update render set cont = ${text} where no =${id}`);
    res.send({
        "code": 0
    })
})
module.exports = router;