const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Expense Tracker API is running 🚀"
  });
});

module.exports = app;