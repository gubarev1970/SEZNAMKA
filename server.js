const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'public', 'index.html'));

});

app.listen(10000, () => {
    console.log('Server be�� na http://localhost:10000');
});

