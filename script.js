// Mettre à jour la prévisualisation du CV
function mettreAJourCV() {
    document.getElementById('cv-nom').innerText = 
        document.getElementById('prenom').value + " " + document.getElementById('nom').value;
    document.getElementById('cv-contact').innerText = 
        "Email: " + document.getElementById('email').value + " | Téléphone: " + document.getElementById('telephone').value;

    // Parcours scolaire
    let parcoursHTML = "";
    document.querySelectorAll('#parcours-scolaire input').forEach(input => {
        parcoursHTML += `<li>${input.value}</li>`;
    });
    document.getElementById('cv-parcours').innerHTML = parcoursHTML;

    // Expérience professionnelle
    let experienceHTML = "";
    document.querySelectorAll('#experience input').forEach(input => {
        experienceHTML += `<li>${input.value}</li>`;
    });
    document.getElementById('cv-experience').innerHTML = experienceHTML;

    // Compétences et centres d'intérêt
    document.getElementById('cv-competences').innerText = document.getElementById('competences').value;
    document.getElementById('cv-interets').innerText = document.getElementById('interets').value;
}

// Ajouter un parcours scolaire
function ajouterParcours() {
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" class="ecole" placeholder="École/Université">
        <input type="text" class="diplome" placeholder="Diplôme">
        <input type="text" class="annee" placeholder="Année">
    `;
    document.getElementById('parcours-scolaire').appendChild(div);
}

// Ajouter une expérience professionnelle
function ajouterExperience() {
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" class="poste" placeholder="Poste">
        <input type="text" class="entreprise" placeholder="Entreprise">
        <input type="text" class="duree" placeholder="Durée">
    `;
    document.getElementById('experience').appendChild(div);
}

// Télécharger le CV en PDF
function telechargerCV() {
    const element = document.getElementById('cv-preview');
    html2pdf(element);
}

// Écouter les changements dans le formulaire
document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('input', mettreAJourCV);
});