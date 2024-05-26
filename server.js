const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Ana sayfa isteği
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // HTML içeriği oluşturma
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Node.js HTTP Sunucusu</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>Bu bir HTML içeriğidir.</p>
      </body>
      </html>
    `;

    res.end(htmlContent);
  } else if (req.url === '/about') {
    // /about sayfası isteği
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>About Page</title>
      </head>
      <body>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </body>
      </html>
    `;

    res.end(htmlContent);
  } else {
    // Diğer tüm istekler için 404 sayfası
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>404 Not Found</title>
      </head>
      <body>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </body>
      </html>
    `;

    res.end(htmlContent);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
