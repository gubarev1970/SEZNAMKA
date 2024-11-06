document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const eyes = document.getElementById('eyes').value;
    const hair = document.getElementById('hair').value;
    const children = document.getElementById('children').value;
    const job = document.getElementById('job').value;
    const hobbies = document.getElementById('hobbies').value;
    const orientation = document.getElementById('orientation').value;
    const search = document.getElementById('search').value;

    const userData = {
        email,
        username,
        password,
        birthdate,
        height,
        weight,
        eyes,
        hair,
        children,
        job,
        hobbies,
        orientation,
        search
    };

    console.log(userData); // Zobrazí data, která budou odeslána

    fetch('https://tvuj-server.com/api/registrace', { // Změň na správnou URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Síťová odpověď nebyla v pořádku: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Zobrazí odpověď ze serveru
        if (data.success) {
            alert('Registrace byla úspěšná!');
            window.location.href = 'profil.html'; // Přesměrování na profil
        } else {
            alert('Chyba při registraci: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Chyba:', error);
        alert('Došlo k chybě při registraci. Zkuste to prosím znovu.');
    });
});

