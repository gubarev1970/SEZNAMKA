// Uložení údajů z registračního formuláře do localStorage
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const userProfile = {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                birthdate: document.getElementById('birthdate').value,
                height: document.getElementById('height').value,
                weight: document.getElementById('weight').value,
                eyes: document.getElementById('eyes').value,
                hair: document.getElementById('hair').value,
                children: document.getElementById('children').value,
                job: document.getElementById('job').value,
                hobbies: document.getElementById('hobbies').value,
                orientation: document.getElementById('orientation').value,
                search: document.getElementById('search').value
            };

            // Uložení dat do localStorage
            localStorage.setItem('userProfile', JSON.stringify(userProfile));

            alert('Registrace byla úspěšná!');
            window.location.href = 'profil.html'; // Přesměrování na profilovou stránku
        });
    }
});

