const http = require('http');
const https = require('https');

const hostname = 'https://chapii.vercel.app/';
const port = 3000;

const server = http.createServer((req, res) => {
   if (req.method === 'GET') {
    if (req.url === '/docs/api/neko') { const url = 'https://api.waifu.pics/nsfw/neko'; }
    if (req.url === '/docs/api/waifu') { const url = 'https://api.waifu.pics/nsfw/waifu'; }
    if (req.url === '/docs/api/trap') { const url = 'https://api.waifu.pics/nsfw/trap'; }
    if (req.url === '/docs/api/blowjob') { const url = 'https://api.waifu.pics/nsfw/blowjob'; }

    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const result = JSON.parse(data);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(result));
        } catch (error) {
          console.error('JSON parse hatası:', error);
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
      });
    }).on('error', (error) => {
      console.error('Hata:', error.message);
      res.statusCode = 500;
      res.end('Internal Server Error');
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
