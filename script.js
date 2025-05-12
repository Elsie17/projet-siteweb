
// Menu hamburger
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
    const totalArticles = panier.reduce((acc, item) => acc + item.quantité, 0);
    compteur.textContent = `(${totalArticles})`;
}

// Notification générique
function afficherNotification(message) {
    let notif = document.getElementById('notification');
    if (!notif) {
        notif = document.createElement('div');
        notif.id = 'notification';
        notif.className = 'notification';
        document.body.appendChild(notif);
    }
    notif.textContent = message;
    notif.classList.add('show');
    setTimeout(() => {
        notif.classList.remove('show');
    }, 2500);
}

document.addEventListener('DOMContentLoaded', function () {
    mettreAJourCompteurPanier();

    // Script panier
    const boutonsAjouter = document.querySelectorAll('.add-to-cart');
    const panier = JSON.parse(localStorage.getItem('panier')) || [];

    boutonsAjouter.forEach(bouton => {
        bouton.addEventListener('click', () => {
            const nom = bouton.dataset.nom;
            const prix = Number(bouton.dataset.prix);
            const imageElem = bouton.closest('.product-card')?.querySelector('img');
            const image = imageElem ? imageElem.src : 'images/default.jpg';

            const exist = panier.find(p => p.nom === nom);
            if (exist) {
                exist.quantité++;
            } else {
                panier.push({ nom, prix, image, quantité: 1 });
            }

            localStorage.setItem('panier', JSON.stringify(panier));
            afficherNotification(`${nom} ajouté au panier !`);
            mettreAJourCompteurPanier();
        });
    });

    // Script formulaire contact
    const confirmationMessage = document.getElementById('confirmation-message');
    const form = document.querySelector('.contact-form form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            confirmationMessage.textContent = "Votre message a bien été envoyé !";
            confirmationMessage.classList.add('show');

            setTimeout(function () {
                confirmationMessage.classList.remove('show');
                form.reset();
            }, 3000);
        });
    }
});