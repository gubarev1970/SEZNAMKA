const express = require('express');
const path = require('path');
const app = express();

// Nastavení složky pro statické soubory na složku src/public
app.use(express.static(path.join(__dirname, 'public')));

// Nastavení hlavní stránky na `index.html` ve složce src/public
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rucní nastavení cest k jednotlivým stránkám v složce src/public
app.get('/registrace.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registrace.html'));
});
app.get('/prihlášení.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'prihlášení.html'));
});
app.get('/profil.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profil.html'));
});
app.get('/chat.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});
app.get('/koupit mince.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'koupit mince.html'));
});
app.get('/komentáre.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'komentáre.html'));
});
app.get('/fotky.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'fotky.html'));
});

// Nastavení portu
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server beží na http://localhost:${PORT}`);
});

