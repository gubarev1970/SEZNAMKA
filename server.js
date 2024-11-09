const express = require('express');
const path = require('path');
const app = express();

// Hlavn� route pro nacten� index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Spu�ten� serveru
app.listen(10000, () => {
    console.log('Server be�� na http://localhost:10000');
});

