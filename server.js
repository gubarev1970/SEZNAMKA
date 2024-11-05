const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg'); // Nebo jiná knihovna pro vaši databázi
const path = require('path'); // Přidáno pro zpracování cest
const app = express();

app.use(bodyParser.json()); // Pro zpracování JSON dat
app.use(express.static('public')); // Tato složka obsahuje vaše statické soubory

// Připojení k databázi
const pool = new Pool({
    connectionString: process.env.db_url // nebo jiná cesta k databázi
});

// Endpoint pro kořenovou cestu
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html')); // Ujistěte se, že odkazujete na správnou cestu
});

// Endpoint pro registraci
app.post('/register', async (req, res) => {
    const { email, username, password, birthdate, height, weight, eyes, hair, children, job, hobbies, orientation, search } = req.body;

    try {
        // Hashování hesla
        const hashedPassword = await bcrypt.hash(password, 10);

        // Vložení uživatelských dat do databáze
        const result = await pool.query(
            'INSERT INTO users (email, username, password, birthdate, height, weight, eyes, hair, children, job, hobbies, orientation, search) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
            [email, username, hashedPassword, birthdate, height, weight, eyes, hair, children, job, hobbies, orientation, search]
        );

        res.json({ success: true });
    } catch (error) {
        console.error('Chyba při registraci:', error);
        res.json({ success: false, message: 'Chyba při registraci. Zkontrolujte, zda uživatelské jméno nebo e-mail již neexistují.' });
    }
});

// Spuštění serveru
app.listen(3000, () => {
    console.log('Server běží na portu 3000');
});

