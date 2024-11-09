const express = require('express');
const path = require('path');
const app = express();

// Hlavní route pro nactení index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Spuštení serveru
app.listen(10000, () => {
    console.log('Server beží na http://localhost:10000');
});

