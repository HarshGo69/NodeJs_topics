const http = require('http')

const server = http.createServer((req, res) =>{
  console.log(req.url ,req.headers, req.method);
  res.setHeader('Content-Type','text/html');
  res.write('<html>'); // send response as an HTML page 
  res.write('<head><title>Request Response</title></head>'); //changes the title like in nextJs 
  res.write('<body><h1> Hello This Is The Body Tag</h1></body>')
  res.write('</html>');
  res.end();
  process.exit(); // to exite the server 
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
