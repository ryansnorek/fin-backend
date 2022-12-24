const router = require("express").Router();

router.get("/", (req, res, next) => {
  console.log("hello")
});

module.exports = router;
