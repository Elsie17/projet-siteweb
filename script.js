// Menu hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
}

// Fonction pour mettre à jour le compteur panier
function mettreAJourCompteurPanier() {
    const compteur = document.getElementById('cart-count');
    const panier = JSON.parse(localStorage.getItem('panier')) || [];
    const totalArticles = panier.reduce ((acc,item) =>acc + item.quantité, 0);
    compteur.textContent = `(${totalArticles})`;
}
// script d'ajout au panier
const boutonsAjouter = document.querySelectorAll('.add-to-cart');
const panier = JSON.parse(localStorage.getItem('panier')) || [];

boutonsAjouter.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const nom = bouton.dataset.nom;
        const prix = Number(bouton.dataset.prix);
        const imageElem = bouton.closest('.product-card')?.querySelector('img');
        const image = imageElem ? imageElem.src : 'images/default.jpg'; //ou une image par defaut

        const exist = panier.find(p => p.nom === nom);
        if (exist) {
            exist.quantité++;
        } else {
            panier.push({ nom, prix, image, quantité: 1 });
        }

        localStorage.setItem('panier', JSON.stringify(panier));
        afficherNotification(`${nom} ajouté au panier !`);
        mettreAJourCompteurPanier();

        function afficherNotification(message) {
            const notif = document.getElementById('notification');
            notif.textContent = message;
            notif.classList.add('show');
            setTimeout(() => {
                notif.classList.remove('show');
            }, 2500); // la notification disparaît après 2,5 secondes
        }

        // script contact

// Mettre à jour le compteur au chargement
document.addEventListener('DOMContentLoaded', mettreAJourCompteurPanier);

// Sélectionner l'élément de message de confirmation
const confirmationMessage = document.getElementById('confirmation-message');

// Sélectionner le formulaire
const form = document.querySelector('.contact-form form');

// Ajouter un écouteur d'événement pour gérer la soumission du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Afficher le message de confirmation
    confirmationMessage.textContent = "Votre message a bien été envoyé !";
    
    // Ajouter la classe pour afficher l'alerte
    confirmationMessage.classList.add('show');

    // Réinitialiser le formulaire et cacher l'alerte après 3 secondes
    setTimeout(function() {
        confirmationMessage.classList.remove('show');
        form.reset(); // Réinitialiser le formulaire
    }, 3000); // L'alerte disparaît après 3 secondes

        });
    });
});












    



