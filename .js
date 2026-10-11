// Récupération des éléments du DOM
const form = document.getElementById('contactForm');
const tableBody = document.querySelector('#contactTable tbody');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // Récupérer les valeurs des champs de saisie
    const nom = document.getElementById('nom').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const adresse = document.getElementById('adresse').value.trim();

    // Vérifier que les champs ne sont pas vides
    if (nom === '' || numero === '' || adresse === '') {
        return;
    }

    // Créer une nouvelle ligne de tableau (<tr>)
    const newRow = document.createElement('tr');

    // Insérer les données dans les cellules (<td>)
    newRow.innerHTML = `
        <td>${nom}</td>
        <td>${numero}</td>
        <td>${adresse}</td>
    `;

    // Ajouter la ligne au corps du tableau
    tableBody.appendChild(newRow);

    // Réinitialiser le formulaire pour une nouvelle saisie
    form.reset();
});

