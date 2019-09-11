var express = require("express");
var router = express.Router();

/* GET Usage Page. */
router.get("/", function(req, res, next) {
  res.render("pages/usage", { title: "Express" });
  // res.send("Hello World!");
});

module.exports = router;
