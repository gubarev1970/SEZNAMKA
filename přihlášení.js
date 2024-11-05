const { Client } = require('pg');
const bcrypt = require('bcrypt');

const client = new Client({
    user: 'tvé_uživatelské_jméno',
    host: 'localhost',
    database: 'název_databáze',
    password: 'tvé_heslo',
    port: 5432,
});

async function login(username, password) {
    await client.connect();
    
    try {
        const res = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        
        if (res.rows.length > 0) {
            const user = res.rows[0];

            // Ověření hesla
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                console.log('Přihlášení úspěšné!');
                // Tady můžeš pokračovat s dalšími akcemi (např. vytvoření session)
            } else {
                console.log('Nesprávné heslo.');
            }
        } else {
            console.log('Uživatel nenalezen.');
        }
    } catch (err) {
        console.error('Chyba při přihlášení:', err);
    } finally {
        await client.end();
    }
}

// Zavolej funkci s uživatelským jménem a heslem
login('uživatelské_jméno', 'heslo');
