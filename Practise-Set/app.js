const express = require('express');
const  userRouter  = require('./router/userRouter')
const app = express();
const hostRouter = require('./router/hostRouter')
//Below is the middleware
app.use((req, res, next) => {
  console.log(req.url ,req.method);
  next(); 
});

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

const PORT = 3000; 
app.listen(PORT , () => {
  console.log(`The server is running on PORT http://localhost:${PORT}`);
})