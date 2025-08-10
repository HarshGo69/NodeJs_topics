const express = require('express');
const app = express();
app.use((req, res, next)=> {
  console.log("come 1 ", req.url, req.method);
  res.send('<p>This is the response</p>')
  next();
});
app.use((req, res, next)=> {
  console.log("come 2 ", req.url, req.method);
});
app.use((req, res, next)=> {
  console.log("come 3", req.url, req.method);
});
  const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})