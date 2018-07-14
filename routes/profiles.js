var express = require("express");
var router = express.Router();

/* GET profiles listing. */
router.get("/", function(req, res, next) {
  res.json([{ id: 1, username: "sodope" }, { id: 2, username: "sonamcp" }]);
});

module.exports = router;
