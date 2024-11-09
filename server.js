const express = require('express');
const path = require('path');
const app = express();

// Nastaven� slo�ky pro statick� soubory v korenov�m adres�ri
app.use(express.static(__dirname));

// Nastaven� hlavn� str�nky na `index.html` v korenov�m adres�ri
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rucn� nastaven� cest k jednotliv�m str�nk�m v korenov�m adres�ri
app.get('/registrace.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'registrace.html'));
});
app.get('/prihl�en�.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'prihl�en�.html'));
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
app.get('/koment�re.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'koment�re.html'));
});
app.get('/fotky.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fotky.html'));
});

// Nastaven� portu
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server be�� na http://localhost:${PORT}`);
});

