const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(express.static('public'));

app.listen(10000, () => {
    console.log('Server running on http://localhost:10000');
});

