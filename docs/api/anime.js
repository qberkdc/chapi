const https = require('https');

const url = 'https://api.waifu.pics/sfw/neko';

https.get(url, (response) => {
  let data = '';

  // Veri akışı geldiğinde parça parça alıp birleştirme
  response.on('data', (chunk) => {
    data += chunk;
  });

  // Tüm veri akışını aldıktan sonra işleme
  response.on('end', () => {
    try {
      const result = JSON.parse(data);
      console.log(result);
    } catch (error) {
      console.error('JSON verisi ayrıştırılamadı:', error);
    }
  });
}).on('error', (error) => {
  console.error('Hata oluştu:', error.message);
});
