const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  
  res.setHeader('Content-Type', 'text/html'); // Set header once
  
  if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Request Response</title></head>');
    res.write('<body><h1>Hello This Is The Body Tag</h1></body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/about') {
    res.write('<html>');
    res.write('<head><title>Request Response</title></head>');
    res.write('<body><h1>Hello you are in About section</h1></body>');
    res.write('</html>');
    res.end();
  } else {
    // Handle invalid routes (e.g., 404)
    res.statusCode = 404;
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write('<body><h1>404 - Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});