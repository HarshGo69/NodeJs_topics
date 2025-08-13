const express = require('express')
const hostRouter = express.Router();
hostRouter.get("/host/add-home",(req, res, next) => {
  res.send(
    `<h1>Resigter you HoMe here</h1>
    <form action="/host/add-home" method="POST">
    <input type="text" placeholder="Enter your home" name="housename"/>
    <input type="submit" />
    </form>`
  );
});


hostRouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(
    `<h1>Home resgisterd succesfully</h1>
    <a href="/">Go home</a>`
  );
});
module.exports = hostRouter;