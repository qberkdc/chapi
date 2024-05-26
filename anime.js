const https = require('https');

function getAnimeImage(callback) {
  const url = 'https://api.waifu.pics/sfw/neko';

  https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      try {
        const result = JSON.parse(data);
        callback(null, result);
      } catch (error) {
        console.error('JSON parse hatası:', error);
        callback(error, null);
      }
    });
  }).on('error', (error) => {
    console.error('Hata:', error.message);
    callback(error, null);
  });
}

module.exports = {
  getAnimeImage,
};
