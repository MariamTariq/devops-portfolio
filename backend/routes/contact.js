const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Temporary in-memory storage
const messages = [];

// POST: /api/contact
router.post(
  "/",
  [
    body("name").isLength({ min: 3 }).withMessage("Name too short"),
    body("email").isEmail().withMessage("Invalid email"),
    body("message").isLength({ min: 10 }).withMessage("Message too short"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { name, email, message } = req.body;

    messages.push({
      name,
      email,
      message,
      date: new Date(),
    });

    res.json({
      message: "   Your message has been received. Excited to connect with you!",
    });
  }
);

module.exports = router;
