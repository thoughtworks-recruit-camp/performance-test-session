const http = require('http');

const hostname = '192.168.42.1';
const port = 13000;
let content = (() => {
  let n = Math.floor(Math.random()*100);
  let message = "";
  for (let index = 0; index < n; index++) {
    message += 'Hello, World!';
  }
  return message;
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '<title>Welcome to nginx!</title>\n' +
    '<style>\n' +
    '    body {\n' +
    '        width: 35em;\n' +
    '        margin: 0 auto;\n' +
    '        font-family: Tahoma, Verdana, Arial, sans-serif;\n' +
    '    }\n' +
    '</style>\n' +
    '</head>\n' +
    '<body>\n' +
    '<h1>Welcome to nginx!</h1>\n' +
    '<p>If you see this page, the nginx web server is successfully installed and\n' +
    'working. Further configuration is required.</p>\n' +
    '\n' +
    '<p>For online documentation and support please refer to\n' +
    '<a href="http://nginx.org/">nginx.org</a>.<br/>\n' +
    'Commercial support is available at\n' +
    '<a href="http://nginx.com/">nginx.com</a>.</p>\n' +
    '\n' +
    '<p><em>Thank you for using nginx.</em></p>\n' +
    '</body>\n' +
    '</html>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});