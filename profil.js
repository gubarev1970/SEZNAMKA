const { Client } = require('pg');
const bcrypt = require('bcrypt');

const client = new Client({
    user: 'tvé_uživatelské_jméno',
    host: 'localhost',
    database: 'název_databáze',
    password: 'tvé_heslo',
    port: 5432,
});

async function insertOrUpdateProfile(username, password, birthdate, height, weight, eyes, hair, children, job, hobbies, orientation, search) {
    await client.connect();

    try {
        // Zjistit, zda uživatel již existuje
        const res = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        
        if (res.rows.length > 0) {
            // Uživatel existuje, aktualizuj profil
            await client.query(`
                UPDATE users
                SET birthdate = $1,
                    height = $2,
                    weight = $3,
                    eyes = $4,
                    hair = $5,
                    children = $6,
                    job = $7,
                    hobbies = $8,
                    orientation = $9,
                    search = $10
                WHERE username = $11
            `, [birthdate, height, weight, eyes, hair, children, job, hobbies, orientation, search, username]);
            console.log('Profil byl úspěšně aktualizován.');
        } else {
            // Uživatel neexistuje, vlož nového uživatele
            const hashedPassword = await bcrypt.hash(password, 10); // Hash hesla
            await client.query(`
                INSERT INTO users (username, password, birthdate, height, weight, eyes, hair, children, job, hobbies, orientation, search)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            `, [username, hashedPassword, birthdate, height, weight, eyes, hair, children, job, hobbies, orientation, search]);
            console.log('Profil byl úspěšně vytvořen.');
        }
    } catch (err) {
        console.error('Chyba při vložení nebo aktualizaci profilu:', err);
    } finally {
        await client.end();
    }
}

// Zavolej funkci s údaji uživatele
insertOrUpdateProfile('novýUživatel', 'heslo123', '1995-05-15', 180, 75, 'zelené', 'černé', 'žádné', 'inženýr', 'fotbal', 'heterosexuální', 'vztah');
