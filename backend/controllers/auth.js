const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dns = require("dns");

// Helper: validate email format
const isValidEmailFormat = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

exports.registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Passwords do not match." });

  if (!isValidEmailFormat(email))
    return res.status(400).json({ message: "Invalid email format." });

  try {
    const emailDomain = email.split("@")[1];

    dns.resolveMx(emailDomain, async (err, addresses) => {
      if (err || !addresses || addresses.length === 0) {
        return res
          .status(400)
          .json({ message: "Email domain does not exist." });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(400).json({ message: "User already exists." });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "100d",
      });

      res.status(201).json({
        user: { id: newUser._id, name: newUser.name, email: newUser.email },
        token,
      });
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// In your controllers/auth.js (or authController.js)
exports.getUserProfile = async (req, res) => {
  try {
    // Get user ID from JWT token (assumes you have auth middleware)
    const userId = req.user.id;
    
    const user = await User.findById(userId).select('-password'); // Exclude password
    
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};