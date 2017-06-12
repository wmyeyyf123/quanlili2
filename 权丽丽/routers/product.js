var express = require("express");
var app = express();
var router = express.Router();
connection = require("../config/mysql.js");
router.get("/product", function(req, res) {
    var id = req.query.id;
    //console.log(id);
    connection.query("select * from render where no=" + id + "", function(err, data) {
        //  console.log(data[0].cont)
        if (data.length > 0) {
            res.render('product', {
                "data": data[0]
            })
        }
    });
})
module.exports = router;