const http = require('http');

const server = http.createServer((req , res )=>{
console.log(req.url , req.method);

//set header content type
res.setHeader('content-type','text/html');

res.write('<head><link rel="styleseet" href="*"</head>');
res.write('<p>hello, Saymon Ahammad.</p>');
res.write('<p>hello, Narayanganj.</p>');
res.end()
});

server.listen(3000, 'localhost',() =>{
  console.log('listening for request on port 3000')
});
