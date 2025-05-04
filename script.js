// Menu hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
}

document.addEventListener('DOMContentLoaded', function() {
    const boutonsAjouter = document.querySelectorAll('.add-to-cart');

    boutonsAjouter.forEach(function(bouton) {
        bouton.addEventListener('click', function() {
            const nom = bouton.getAttribute('data-nom');
            const prix = parseFloat(bouton.getAttribute('data-prix'));

            // Récupérer le panier actuel depuis localStorage
            let panier = JSON.parse(localStorage.getItem('panier')) || [];

            // Vérifier si l’article existe déjà
            const index = panier.findIndex(item => item.nom === nom);
            if (index !== -1) {
                // Si l’article existe, augmenter la quantité
                panier[index].quantite += 1;
            } else {
                // Sinon, ajouter l’article avec quantité = 1
                panier.push({ nom: nom, prix: prix, quantite: 1 });
            }

            // Sauvegarder le panier dans localStorage
            localStorage.setItem('panier', JSON.stringify(panier));

            alert( '${nom} a été ajouté au panier !');
        });
    });
});