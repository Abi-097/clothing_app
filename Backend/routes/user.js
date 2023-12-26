const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user Test");
});

router.post("");

module.exports = router;
