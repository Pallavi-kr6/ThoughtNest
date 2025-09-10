const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.get("/google", authController.googleLogin);


router.get(
  "/google/callback",
  authController.googleCallback,
  authController.redirectAfterLogin
);

router.get("/logout", authController.logoutUser);

module.exports = router;
