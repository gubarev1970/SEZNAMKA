const { Client } = require('pg');

const client = new Client({
    user: 'tvé_uživatelské_jméno',
    host: 'localhost',
    database: 'název_databáze',
    password: 'tvé_heslo',
    port: 5432,
});

client.connect();

const insertUserQuery = `
    INSERT INTO users (username, password, birthdate, height, weight, eyes, hair, children, job, hobbies, orientation, search) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
`;

const userData = [
    'novýUživatel', // username
    'heslo123',     // password
    '1995-05-15',   // birthdate
    180,            // height
    75,             // weight
    'zelené',       // eyes
    'černé',        // hair
    'žádné',        // children
    'inženýr',      // job
    'fotbal',       // hobbies
    'heterosexuální', // orientation
    'vztah'         // search
];

client.query(insertUserQuery, userData)
    .then(res => {
        console.log('Uživatel byl úspěšně vložen');
        client.end();
    })
    .catch(err => {
        console.error('Chyba při vkládání uživatele:', err);
        client.end();
    });
