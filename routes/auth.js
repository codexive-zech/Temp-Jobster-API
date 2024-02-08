const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");
const { register, login, updateUser } = require("../controllers/auth");
const testUser = require("../middleware/testUser");
const rateLimiter = require("express-rate-limit");
const apiLimiter = rateLimiter({
  windowMS: 15 * 60 * 100,
  max: 10,
  message: {
    msg: "Too Many Request From This IP. Try again in 15 Minutes",
  },
});
router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, testUser, updateUser);

module.exports = router;
