var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("luggage", { title: "Search Results Restaurant" });
});

module.exports = router;
