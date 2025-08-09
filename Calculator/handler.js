//To manage incomming request from the server
const requestHandler = (req, res) => {
  console.log(req.url , req.method);
  if(req.url === './'){
    res.setheader('Content-type','text/html');
    res.write(` <html>
      <head><title>Practise Set</head></title>
      <body><h1>welcome to calcultor</h1></body>
      <a href="/calcultor">go to calcultor</a>
      </html>`);
      return res.end();
  }
  res.setheader('Content-type','text/html');
    res.write(` <html>
      <head><title>Practise Set</head></title>
      <body><h1>404 Error - Page does not exist</h1></body>
      <a href="/">Go to Home</a>
      </html>`);
      return res.end();
};
exports.requestHandler = requestHandler;