const http = require('http');
const anime = require('./anime'); // anime.js dosyasını içe aktar

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/neko' && req.method === 'GET') {
    anime.getAnimeImage((error, result) => {
      if (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Sunucu http://${hostname}:${port}/ adresinde çalışıyor.`);
});
