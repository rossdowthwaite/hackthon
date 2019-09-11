var express = require("express");
var router = express.Router();

/* GET Usage Page. */
router.get("/", function(req, res, next) {
  res.render("pages/washingMachine", { title: "Express" });
});

module.exports = router;
