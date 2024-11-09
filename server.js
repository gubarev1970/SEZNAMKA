const express = require('express');
const path = require('path');
const app = express();

// Nastavení hlavní stránky na `index.html` v korenovém adresári
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Nastavení portu
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server beží na http://localhost:${PORT}`);
});

