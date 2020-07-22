const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @desc Test
// @access Public
router.get("/test", (req, res) => {
  res.status(200).json({ message: "profile works" });
});

module.exports = router;
