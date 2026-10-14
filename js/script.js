const formulaire = document.getElementById('monFormulaire');
const blocResultat = document.getElementById('resultat');
const rangeInput = document.getElementById('niveau');
const valNiveau = document.getElementById('valNiveau');

// Mise à jour en direct de la valeur du range
rangeInput.addEventListener('input', function() {
    valNiveau.innerText = this.value;
});

// Gestion de la soumission du formulaire
formulaire.addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const dateNais = document.getElementById('dateNais').value;
    const couleurFav = document.getElementById('couleurFav').value;
    const niveau = rangeInput.value;

    blocResultat.style.display = 'block';
    blocResultat.style.borderLeft = `5px solid ${couleurFav}`;
    blocResultat.innerHTML = `
        <strong>Données soumises avec succès !</strong><br>
        - <strong>Nom :</strong> ${nom}<br>
        - <strong>Email :</strong> ${email}<br>
        - <strong>Date de naissance :</strong> ${dateNais || 'Non renseignée'}<br>
        - <strong>Niveau :</strong> ${niveau}/10
    `;
});

