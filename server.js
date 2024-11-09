const express = require('express');
const path = require('path');
const app = express();

// Nastavení složky pro statické soubory v korenovém adresári
app.use(express.static(__dirname));

// Nastavení hlavní stránky na `index.html` v korenovém adresári
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rucní nastavení cest k jednotlivým stránkám v korenovém adresári
app.get('/registrace.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'registrace.html'));
});
app.get('/prihlášení.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'prihlášení.html'));
});
app.get('/profil.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'profil.html'));
});
app.get('/chat.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat.html'));
});
app.get('/koupit mince.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'koupit mince.html'));
});
app.get('/komentáre.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'komentáre.html'));
});
app.get('/fotky.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fotky.html'));
});

// Nastavení portu
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server beží na http://localhost:${PORT}`);
});

