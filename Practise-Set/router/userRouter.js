const express = require('express')
const userRouter = express.Router();
userRouter.get("/",(req, res, next) => {
  res.send(
    `<h1>Welcome to AIRbnb</h1>
    <a href="/add-home">Add home</a>`
  );
});

module.exports = userRouter;