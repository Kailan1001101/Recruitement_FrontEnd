var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
    console.log("Hellp")
    res.render("index");

});
router.get("/form", function (req, res) {

    res.render("form");
});

router.get("/abc", function (req, res) {

    res.render("abc/CV");
});


module.exports = router;