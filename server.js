const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Připojení k databázi PostgreSQL
const db_url = 'tvoje_db_url_tady'; // Nahraď svým URL
const pool = new Pool({
    connectionString: db_url,
});

// Middleware pro zpracování JSON a URL-encoded dat
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Statické soubory z veřejné složky
app.use(express.static(path.join(__dirname, 'public')));

// Hlavní stránka (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint pro registraci
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        // Uložení nového uživatele do databáze
        const result = await pool.query(
            'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *',
            [email, username, password]
        );

        res.json({ success: true, user: result.rows[0] });
    } catch (error) {
        console.error('Chyba při registraci:', error);
        res.status(400).json({ success: false, message: 'Chyba při registraci: ' + error.message });
    }
});

// Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});

