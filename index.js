const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Obsluhujeme statické soubory ze složky 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Odeslání souboru index.html jako hlavní stránka
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server běží na portu ${PORT}`);
});

