document.getElementById('registerButton').addEventListener('click', async () => {
    const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            birthdate: document.getElementById('birthdate').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            hobbies: document.getElementById('hobbies').value,
            children: document.getElementById('children').value,
            employment: document.getElementById('employment').value,
            sexualOrientation: document.getElementById('sexualOrientation').value,
            lookingFor: document.getElementById('lookingFor').value,
        })
    });

    const data = await response.json();
    alert(data.message || data.error);
});

document.getElementById('loginButton').addEventListener('click', async () => {
    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        })
    });

    const data = await response.json();
    if (data.coins !== undefined) {
        alert(`Přihlášení úspěšné! Máte ${data.coins} mincí.`);
        // Zobrazit mince v chatu
    } else {
        alert(data.error);
    }
});

document.getElementById('sendButton').addEventListener('click', async () => {
    const response = await fetch('/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            senderId: currentUserId, // Získejte aktuálního uživatele
            recipientId: recipientId, // Získejte ID příjemce
            messageContent: document.getElementById('messageInput').value,
        })
    });

    const data = await response.json();
    if (data.error) {
        alert(data.error);
    } else {
        // Přidejte zprávu do chatu
        displayMessage(data);
    }
});

