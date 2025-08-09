//Created a server 
const http = require("http");   //imported modules
const { requestHandler } = require('./handler'); //imported from handler.js
const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})