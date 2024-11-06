const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Servírování statických souborů ze složky 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route pro hlavní stránku
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server běží na portu ${PORT}`);
});

