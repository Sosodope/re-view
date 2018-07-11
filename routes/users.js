var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json([
    { id: 1, username: "sodope", location: "Earth" },
    { id: 2, username: "sonamcp", location: "Mars" }
  ]);
});

module.exports = router;
