// In your routes/authRoute.js (or userRoutes.js)
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware"); // You'll need this
const { registerUser, getUserProfile } = require("../controllers/auth");

router.post("/register", registerUser);
router.get("/profile", authMiddleware, getUserProfile); // Protected route

module.exports = router;