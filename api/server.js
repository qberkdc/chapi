const express = require('express');
const Jimp = require('jimp');
const path = require('path');
const app = express();
const port = 3000;

// Bir endpoint oluşturuyoruz
app.get('/add-text', async (req, res) => {
    try {
        // Resim dosyasının yolu
        const imagePath = path.join(__dirname, 'path/to/image.jpg');
        // Çıktı dosyasının yolu
        const outputPath = path.join(__dirname, 'path/to/output.jpg');

        // Resmi okuma
        const image = await Jimp.read(imagePath);

        // Fontu yükleme
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

        // Yazıyı ekleme
        image.print(font, 10, 10, 'Hello, World!');

        // Yeni resmi kaydetme
        await image.writeAsync(outputPath);

        res.send('Resim üzerine yazı eklendi ve kaydedildi.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Bir hata oluştu.');
    }
});

// Sunucuyu başlatma
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
