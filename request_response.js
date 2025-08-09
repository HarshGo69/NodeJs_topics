const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  
  res.setHeader('Content-Type', 'text/html'); // Set header once
  
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
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