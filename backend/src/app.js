const express = require("express");
const cors = require("cors");
const app = express();
const { config } = require("dotenv");

config({ path: "./.env" });
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Import Routes
const todo = require("./routes/todoRoute");

app.use("/api/v1/todos", todo);

// Error Middleware

app.use((err, req, res, next) => {
  err.msaage ||= "Internel Server Error";

  res.status(400).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
