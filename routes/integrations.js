var express = require("express");
var router = express.Router();

/* GET Usage Page. */
router.get("/", function(req, res, next) {
  res.render("pages/integrations", { title: "Express" });
});

module.exports = router;
