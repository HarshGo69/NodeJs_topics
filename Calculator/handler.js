//To manage incomming request from the server
const { sumRequestHandler } = require('./sum');
const requestHandler = (req, res) => {
  console.log(req.url , req.method);
  if(req.url === '/'){
    res.setHeader('Content-type','text/html');
    res.write(` <html>
      <head><title>Practise Set</title></head>
      <body><h1>welcome to calcultor</h1></body>
      <a href="/calculator">go to calcultor</a>
      </html>`);
      return res.end();
  }
  else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-type','text/html');
    res.write(` <html>
      <head><title>Practise Set</title></head>
      <body><h1>Here is the calculator</h1></body>
      <form action="/calculate-result" method="POST"> 
      <input type="text" placeholder="First num" name="first" />
      <input type="text" placeholder="secound num" name="secound" />
      <input type="submit" value="Sum">
      </form>
      </html>`);
      return res.end();
  }
  else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req, res);
  }
  res.setHeader('Content-type','text/html');
    res.write(` <html>
      <head><title>Practise Set</title></head>
      <body><h1>404 Error - Page does not exist</h1></body>
      <a href="/">Go to Home</a>
      </html>`);
      return res.end();
};
exports.requestHandler = requestHandler;