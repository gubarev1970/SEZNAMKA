const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server běží na portu ${PORT}`);
});

