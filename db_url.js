// seedDatabase.js
const { Pool } = require('pg');
const { faker } = require('@faker-js/faker');

// Připojení k databázi pomocí db_url
const pool = new Pool({
  connectionString: process.env.db_url,  // Používá hodnotu db_url z proměnného prostředí
  ssl: {
    rejectUnauthorized: false // Nastavení SSL, záleží na konfiguraci tvé databáze
  }
});

// Funkce pro generování náhodného uživatele
const generateRandomUser = () => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    dateOfBirth: faker.date.past(30, new Date(2000, 0, 1)),
    city: faker.address.city(),
    hobbies: faker.random.arrayElement(['čtení', 'sport', 'cestování', 'malování']),
    children: faker.datatype.number({ min: 0, max: 3 }),
    job: faker.name.jobTitle(),
    sexualOrientation: faker.random.arrayElement(['hetero', 'homo', 'bi']),
  };
};

// Funkce pro vložení uživatelů do databáze
const seedDatabase = async (count) => {
  try {
    for (let i = 0; i < count; i++) {
      const user = generateRandomUser();
      await pool.query(
        'INSERT INTO users (username, email, password, date_of_birth, city, hobbies, children, job, sexual_orientation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [
          user.username,
          user.email,
          user.password,
          user.dateOfBirth,
          user.city,
          user.hobbies,
          user.children,
          user.job,
          user.sexualOrientation,
        ]
      );
    }
    console.log(`${count} uživatelů bylo úspěšně vloženo do databáze!`);
  } catch (error) {
    console.error('Nastala chyba při vkládání dat:', error);
  } finally {
    pool.end();  // Zavře připojení k databázi
  }
};

// Počet generovaných uživatelů (např. 100)
seedDatabase(100);


