const express = require('express');
const path = require('path');
const app = express();

// Nastaven� slo�ky pro statick� soubory na slo�ku src/public
app.use(express.static(path.join(__dirname, 'public')));

// Nastaven� hlavn� str�nky na `index.html` ve slo�ce src/public
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rucn� nastaven� cest k jednotliv�m str�nk�m v slo�ce src/public
app.get('/registrace.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registrace.html'));
});
app.get('/prihl�en�.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'prihl�en�.html'));
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
app.get('/koment�re.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'koment�re.html'));
});
app.get('/fotky.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'fotky.html'));
});

// Nastaven� portu
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server be�� na http://localhost:${PORT}`);
});

