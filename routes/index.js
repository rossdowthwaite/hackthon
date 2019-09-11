var express = require("express");
var router = express.Router();
var TouApi = require("../public/javascripts/tou-api");

/* GET home page. */
router.get("/", function(req, res, next) {
  const data = TouApi.get();
  res.render("pages/index");
});

module.exports = router;
