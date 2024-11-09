const express = require('express');
const path = require('path');
const app = express();

// Nastaven� hlavn� str�nky na `index.html` v korenov�m adres�ri
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Nastaven� portu
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server be�� na http://localhost:${PORT}`);
});

